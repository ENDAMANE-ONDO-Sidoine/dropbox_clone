import React, { useState } from 'react';
import { uploadData } from '@aws-amplify/storage';
import { FaUpload } from 'react-icons/fa';

const FileUploader = () => {
    const [file, setFile] = useState(null);  // State to store the selected file
    const [uploadStatus, setUploadStatus] = useState('');  // State to store upload status message

    const onFileChange = (event) => {
        setFile(event.target.files[0]);  // Update the state with the new file
    };

    const onFileUpload = async () => {
        if (file) {
            const fileName = file.name;
            setUploadStatus('Uploading...');
            try {
                // Perform the file upload via Amplify Storage
                const result = await uploadData(fileName, file, {
                    level: 'protected',  // Access level, 'protected' means only accessible by the uploading user
                    contentType: file.type,  // MIME type for the file, helps S3 handle the file correctly
                    progressCallback(progress) {
                        setUploadStatus(`Uploading: ${progress.loaded}/${progress.total} bytes`);
                    },
                });
                setUploadStatus(`Upload successful: ${fileName}`);
                console.log('File upload result:', result);
            } catch (error) {
                console.error('Error uploading file:', error);
                setUploadStatus(`Error uploading file: ${error.message}`);
            }
        } else {
            setUploadStatus('Please select a file to upload.');
        }
    };
   
return (
    <div className='flex gap-4 items-center justify-center h-full '>
        <input type="file" className="my-4 p-2 border-2 bg-gray-200  border-blue-500 rounded" onChange={onFileChange} />
        <button className="px-4 py-3 bg-blue-500 text-white rounded hover:bg-green-700 flex items-center"  onClick={onFileUpload}>
            <FaUpload className="mr-2"/> Upload File
        </button>
        <p className={`transition-all duration-500 ${uploadStatus === 'Uploading...' ? 'text-blue-500' : 'text-green-500'}`}>{uploadStatus}</p>  {/* Display the upload status */}
    </div>
);

};

export default FileUploader;
