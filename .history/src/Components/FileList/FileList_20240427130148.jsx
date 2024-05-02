import React, { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';

const FileList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        try {
            const fileData = await Storage.list('');
            setFiles(fileData);
            console.log('Files fetched successfully');
        } catch (err) {
            console.error('Error fetching files: ', err);
        }
    };

    return (
        <ul>
            {files.map(file => (
                <li key={file.key}>{file.key}</li>
            ))}
        </ul>
    );
};

export default FileList;
