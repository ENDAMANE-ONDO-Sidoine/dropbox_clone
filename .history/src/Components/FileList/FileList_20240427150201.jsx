import React, { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';

const FileList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const fileKeys = await Storage.list('');
                const fileUrls = await Promise.all(
                    fileKeys.map(async file => ({
                        ...file,
                        url: await Storage.get(file.key)
                    }))
                );
                setFiles(fileUrls);
            } catch (error) {
                console.error('Error fetching files', error);
            }
        };
        fetchFiles();
    }, []);

    return (
        <div>
            <ul>
                {files.map((file, index) => (
                    <li key={index}>
                        <a href={file.url} target="_blank" rel="noopener noreferrer">{file.key}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;
