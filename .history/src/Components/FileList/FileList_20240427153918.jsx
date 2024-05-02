import React, { useEffect, useState } from 'react';
import { list, getUrl } from '@aws-amplify/storage';
import { FaDownload } from 'react-icons/fa';

const FileList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                console.log("Fetching files...");
                const fileData = await list("");  // Assuming "" targets the correct file path
                const urls = await Promise.all(fileData.map(async file => ({
                    ...file,
                    url: await getUrl(file.key, { level: 'public' })
                })));
                console.log("Files fetched and URLs retrieved:", urls);
                setFiles(urls);
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        };
        fetchFiles();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-5">List of files</h1>
            <ul className="space-y-2">
                {files.map((file, index) => (
                    <li key={index} className="px-3 py-2 bg-white rounded shadow flex items-center">
                        <span className="mr-2">{file.key}</span>
                        <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center">
                            <FaDownload className="mr-1" /> Download
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;
