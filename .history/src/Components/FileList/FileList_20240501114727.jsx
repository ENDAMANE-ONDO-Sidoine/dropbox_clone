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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-5">Liste des fichiers</h1>
            <ul className="space-y-2">
                {files.map(file => (
                    <li key={file.key} className="px-3 py-2 bg-white rounded shadow">{file.key}</li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;
