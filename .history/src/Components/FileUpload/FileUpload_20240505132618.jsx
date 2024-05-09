import React, { useState } from 'react';
import Amplify from '@aws-amplify/core';
import { API, graphqlOperation } from '@aws-amplify/api';
import { Storage } from '@aws-amplify/storage';
import awsExports from '../../aws-exports';
import { createFile } from '../../graphql/mutations';
import { FaUpload } from 'react-icons/fa';

Amplify.configure(awsExports);

export default function FileUpload({ user }) {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [uploadTask, setUploadTask] = useState(null);

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
            const upload = Storage.uploadData({
                path: storagePath,
                data: file,
                options: {
                    contentType: file.type,
                    onProgress: ({ transferredBytes, totalBytes }) => {
                        const progress = Math.round((transferredBytes / totalBytes) * 100);
                        setMessage(`Upload progress: ${progress}%`);
                    }
                }
            });

            setUploadTask(upload);  // Save upload task to state for pause/resume/cancel

            const uploadedFile = await upload.result;  // Wait for the upload to finish
            console.log('Uploaded:', uploadedFile);

            const fileDetails = {
                input: {
                    name: file.name,
                    storagePath,
                    ownerId: user.id,
                    bucket: awsExports.aws_user_files_s3_bucket,
                    region: awsExports.aws_user_files_s3_bucket_region,
                    key: uploadedFile.key
                }
            };

            const newFile = await API.graphql(graphqlOperation(createFile, { input: fileDetails.input }));
            setMessage('File uploaded successfully!');
            console.log('File uploaded and record created:', newFile);
        } catch (error) {
            console.error('Error uploading file and creating record:', error);
            setMessage('Failed to upload file.');
        } finally {
            setLoading(false);
        }
    };

    const handlePause = () => {
        uploadTask && uploadTask.pause();
        setMessage('Upload paused');
    };

    const handleResume = () => {
        uploadTask && uploadTask.resume();
        setMessage('Upload resumed');
    };

    const handleCancel = () => {
        uploadTask && uploadTask.cancel();
        setMessage('Upload cancelled');
    };

    return (
        <div className="p-4 w-[93%] border rounded flex justify-center items-center mx-auto border-blue-600 bg-white shadow">
            {message && <p className="text-red-500">{message}</p>}
            <input type="file" onChange={handleFileChange} className="border-blue-600" disabled={loading} />
            <button onClick={handleUpload} disabled={loading} className="px-2 py-2 bg-blue-500 text-white rounded flex gap-2 items-center">
                {loading ? 'Uploading...' : <><FaUpload className="text-white hover:text-green-600" /> Upload</>}
            </button>
            {uploadTask && (
                <>
                    <button onClick={handlePause} disabled={!loading}>Pause</button>
                    <button onClick={handleResume} disabled={!loading}>Resume</button>
                    <button onClick={handleCancel} disabled={!loading}>Cancel</button>
                </>
            )}
        </div>
    );
}
