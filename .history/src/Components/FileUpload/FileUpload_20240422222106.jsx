import React, { useState } from 'react';
import { uploadData } from '@aws-amplify/storage';  // Ensure this is the correct function
//import { FaUpload } from 'react-icons/fa';

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const onFileChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log("File selected: ", selectedFile);
        console.log("Type of file selected: ", typeof selectedFile, "; Is it a File?: ", selectedFile instanceof File);
        setFile(selectedFile);
    };

    const onFileUpload = async () => {
        if (file && file instanceof File) {
            console.log("File to upload: ", file, "; Type: ", typeof file);
            const fileName = file.name;
            setUploadStatus('Uploading...');
            try {
                const result = await uploadData(fileName, file, {
                    level: 'protected',
                    contentType: file.type,
                    progressCallback(progress) {
                        setUploadStatus(`Uploading: ${progress.loaded}/${progress.total} bytes`);
                    },
                });
                console.log('File upload result:', result);
                setUploadStatus(`Upload successful: ${fileName}`);
            } catch (error) {
                console.error('Error uploading file:', error);
                setUploadStatus(`Error uploading file: ${error.message}`);
            }
        } else {
            console.log('No valid file selected for upload.');
            setUploadStatus('Please select a valid file to upload.');
        }
    };

    return (
        <div className='p-[8%] rounded shadow ...'>
            <input type="file" className="..." onChange={onFileChange} />
            <button className="..." onClick={onFileUpload}>Upload File</button>
            <p className="...">{uploadStatus}</p>
        </div>
    );
};

export default FileUploader;
