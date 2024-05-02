import React, { useState } from 'react';
import { uploadData } from '@aws-amplify/storage';  // Ensure this is the correct import according to your Amplify version
import { FaUpload } from 'react-icons/fa';
impo

const FileUploader = () => {
    const [file, setFile] = useState(null);  // Stores the selected file
    const [uploadStatus, setUploadStatus] = useState('');  // Stores the upload status message

    const onFileChange = (event) => {
        if (event.target.files.length > 0) {
            const selectedFile = event.target.files[0];
            console.log("File selected: ", selectedFile);
            console.log("Type of file selected: ", typeof selectedFile, "; Is it a File?: ", selectedFile instanceof File);
            setFile(selectedFile);  // Updates state with the new file
        }
    };

    const onFileUpload = async () => {
        if (file && file instanceof File) {
            const fileName = file.name;
            console.log(`Starting upload for ${fileName}`);
            setUploadStatus('Uploading...');
            try {
                console.log("File details: ", {name: fileName, type: file.type, size: file.size});
                const result = await uploadData(fileName, file, {
                    level: 'protected',  // File access level
                    contentType: file.type,  // MIME type for S3
                    progressCallback(progress) {
                        setUploadStatus(`Uploading: ${progress.loaded}/${progress.total} bytes`);
                    },
                });
                console.log('Upload successful:', result);
                setUploadStatus(`Upload successful: ${fileName}`);
            } catch (error) {
                console.error('Error uploading file:', error);
                setUploadStatus(`Error uploading file: ${error.message}`);
            }
        } else {
            console.error('No valid file selected for upload.');
            setUploadStatus('Please select a valid file to upload.');
        }
    };

    return (
        <div className='p-[8%] rounded shadow transform transition duration-500 ease-in-out hover:scale-105 flex gap-4 items-center justify-center h-full bg-slate-300 w-[93%] mx-auto'>
            <input type="file" className="my-4 p-2 border-2 bg-gray-100 border-blue-600 rounded" onChange={onFileChange} />
            <button className="px-4 py-3 bg-blue-600 text-white rounded hover:bg-green-700 flex items-center transform transition duration-500 ease-in-out hover:scale-110" onClick={onFileUpload}>
                <FaUpload className="mr-2 hover:animate-pulse"/> Upload File
            </button>
            <p className={`transition-all duration-500 ${uploadStatus === 'Uploading...' ? 'text-blue-500' : uploadStatus.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>{uploadStatus}</p>
            <FileList />
        </div>
    );
};

export default FileUploader;
