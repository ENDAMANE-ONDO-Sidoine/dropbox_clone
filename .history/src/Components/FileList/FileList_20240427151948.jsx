import React, { useEffect, useState } from 'react';
import { list, getUrl } from '@aws-amplify/storage'; // Updated import to use getUrl

const FileList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const fileData = await list(""); // Fetches all files in the default storage level
                const urls = await Promise.all(fileData.map(async file => {
                    return {
                        ...file,
                        url: await getUrl(file.key, { level: 'public' }) // Assumes files are publicly accessible; adjust as needed
                    };
                }));
                setFiles(urls);
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        };

        fetchFiles();
    }, []);

    return (
        <div>
            <ul>
                {files.map((file, index) => (
                    <li key={index}>
                        {file.key} - <a href={file.url} target="_blank" rel="noopener noreferrer">Download</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;
