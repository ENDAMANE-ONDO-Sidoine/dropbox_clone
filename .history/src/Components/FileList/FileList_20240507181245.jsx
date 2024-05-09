import React, { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
import { listFiles } from '../../graphql/queries'; 
import { FaFile, FaFolderOpen } from 'react-icons/fa';
import { GraphQLAPI, graphqlOperation } from '@aws-amplify/api-graphql';

Amplify.configure(awsExports);

export default function FileList({ searchTerm }) { 
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFiles = async () => {
      setIsLoading(true);
      try {
        const fileData = await GraphQLAPI.graphql(graphqlOperation(listFiles));
        if (fileData.data.listFiles && fileData.data.listFiles.items.length > 0) {
          setFiles(fileData.data.listFiles.items);
        } else {
          setError('No files found.');
        }
      } catch (err) {
        console.error('Error fetching files:', err);
        setError('');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-12 py-10 ">
      <h3 className="mb-2 text-2xl font-extrabold text-blue-600 flex gap-2 items-center"><FaFolderOpen className='text-yellow-500'/>LIST OF FILES</h3>
      {isLoading ? (
        <p>Loading files...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {filteredFiles.map((file) => (
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
