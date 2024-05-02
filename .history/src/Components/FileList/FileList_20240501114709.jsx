import React, { useEffect, useState } from 'react';
import { list, get } from '@aws-amplify/storage';

const FileList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const fileData = await list(""); // Fetches all files in the default storage level
                setFiles(fileData);
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        };

        fetchFiles();
    }, []);

    return (
        <div>
            <ul>
                {files.map(file => (
                    <li key={file.key}>
                        {file.key} - <button onClick={() => fetchFile(file.key)}>Download</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const fetchFile = async (key) => {
    try {
        const fileUrl = await get(key);
        window.open(fileUrl, "_blank");
    } catch (error) {
        console.error('Error downloading file:', error);
    }
};

export default FileList;
