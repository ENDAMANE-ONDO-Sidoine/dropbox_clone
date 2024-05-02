import React, { useState } from 'react';
import { Storage } from '@aws-amplify/storage';
import { API, graphqlOperation } from '@aws-amplify/api';
import { Auth } from '@aws-amplify/auth';
import { createFile } from "../graphql/mutations";  // Ensure this path is correct
import { FaUpload } from 'react-icons/fa';

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const onFileChange = (event) => {
        if (event.target.files.length > 0) {
            const selectedFile = event.target.files[0];
            setFile(selectedFile);
        }
    };

    const onFileUpload = async () => {
        if (file && file instanceof File) {
            const fileName = file.name;
            setUploadStatus('Uploading...');
            try {
                const result = await Storage.put(fileName, file, {
                    level: 'protected',
                    contentType: file.type,
                    progressCallback: progress => {
                        setUploadStatus(`Uploading: ${progress.loaded}/${progress.total} bytes`);
                    },
                });
                console.log('Upload successful:', result);
                setUploadStatus(`Upload successful: ${fileName}`);

                const user = await Auth.currentAuthenticatedUser();
                const ownerId = user.attributes.sub;

                const fileDetails = {
                    name: fileName,
                    storagePath: result.key,
                    ownerId: ownerId,
                };

                await API.graphql(graphqlOperation(createFile, { input: fileDetails }));
                console.log('File registered:', fileDetails);
            } catch (error) {
                console.error('Error uploading file:', error);
                setUploadStatus(`Error uploading file: ${error.message}`);
            }
        } else {
            setUploadStatus('Please select a file to upload.');
        }
    };

    return (
        <div className='p-[8%] rounded shadow transform transition duration-500 ease-in-out hover:scale-105 flex gap-4 items-center justify-center h-full bg-slate-300 w-[93%] mx-auto'>
            <input type="file" className="my-4 p-2 border-2 bg-gray-100 border-blue-600 rounded" onChange={onFileChange} />
            <button className="px-4 py-3 bg-blue-600 text-white rounded hover:bg-green-700 flex items-center transform transition duration-500 ease-in-out hover:scale-110" onClick={onFileUpload}>
                <FaUpload className="mr-2 hover:animate-pulse"/> Upload File
            </button>
            <p className={`transition-all duration-500 ${uploadStatus === 'Uploading...' ? 'text-blue-500' : uploadStatus.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>{uploadStatus}</p>
        </div>
    );
};

export default FileUploader;
