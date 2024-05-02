import React, { useState } from 'react';
import { uploadData } from '@aws-amplify/storage';  // Updated import

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
        <div className='lex flex-col items-center justify-center h-full'>
            <input type="file" className="" onChange={onFileChange} />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-700"  onClick={onFileUpload}>Upload File</button>
            <p>{uploadStatus}</p>  {/* Display the upload status */}
        </div>
    );
};

export default FileUploader;
