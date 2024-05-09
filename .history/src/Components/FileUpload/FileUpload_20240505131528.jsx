import React, { useState } from 'react';
import Amplify, { Storage } from 'aws-amplify'; // Ensure Storage is imported here if it's available
import awsExports from '../../aws-exports';
import { FaUpload } from 'react-icons/fa';

Amplify.configure(awsExports);

export default function FileUpload({ user }) {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!user || !user.username) {
            setMessage('User or username is undefined');
            return;
        }
        if (!file) {
            setMessage('No file selected');
            return;
        }

        setLoading(true);
        const storagePath = `uploads/${user.username}/${file.name}`;

        try {
            await Storage.put(storagePath, file, {
                contentType: file.type,
                progressCallback: progress => {
                    setUploadProgress(Math.round((progress.loaded / progress.total) * 100));
                }
            });

            setMessage('File uploaded successfully!');
            console.log('File uploaded:', storagePath);
        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage('Failed to upload file.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 w-[93%] border rounded flex justify-center items-center mx-auto border-blue-600 bg-white shadow">
            {message && <p className="text-red-500">{message}</p>}
            <input type="file" onChange={handleFileChange} className="border-blue-600" disabled={loading} />
            <button onClick={handleUpload} disabled={loading} className="px-2 py-2 bg-blue-500 text-white rounded flex gap-2 items-center">
                {loading ? `Uploading... ${uploadProgress}%` : <><FaUpload className="text-white hover:text-green-600" /> Upload</>}
            </button>
        </div>
    );
}
