import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listFiles } from '../../graphql/queries'; 
import { FaFile, FaFolderOpen } from 'react-icons/fa';

export default function FileList() {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFiles = async () => {
      setIsLoading(true);
      try {
        const fileData = await API.graphql(graphqlOperation(listFiles));
        console.log('File data:', fileData); // Ajoutez ce log
        if (fileData.data.listFiles && fileData.data.listFiles.items.length > 0) {
          setFiles(fileData.data.listFiles.items);
        } else {
          setError('No files found.');
        }
      } catch (err) {
        console.error('Error fetching files:', err);
        setError('Failed to fetch files.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="px-12">
      <h3 className="mb-2 text-2xl font-extrabold text-blue-600 flex gap-2 items-center"><FaFolderOpen className='text-yellow-500'/>LIST OF FILES</h3>
      {isLoading ? (
        <p>Loading files...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {files.map((file) => (
            <li key={file.id} className="border-b py-2 flex justify-between items-center">
              <FaFile className="text-blue-500" />
              <span>{file.name}</span>
              <span className="text-sm text-gray-600">{new Date(file.createdAt).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
