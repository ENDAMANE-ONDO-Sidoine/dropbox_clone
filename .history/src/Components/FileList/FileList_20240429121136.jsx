import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listFiles } from './graphql/queries';
import { deleteFile } from './graphql/mutations';

export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const fileData = await API.graphql(graphqlOperation(listFiles));
      setFiles(fileData.data.listFiles.items);
    } catch (err) {
      console.error('Error fetching files:', err);
    }
  };

  const handleDelete = async (fileId) => {
    try {
      const fileDetails = {
        input: {
          id: fileId
        }
      };
      await API.graphql(graphqlOperation(deleteFile, fileDetails));
      fetchFiles();  // Refresh the list after deleting
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <div className="p-4">
      <ul>
        {files.map(file => (
          <li key={file.id} className="border-b py-2">
            {file.name} - Uploaded on {new Date(file.createdAt).toLocaleString()}
            <button onClick={() => handleDelete(file.id)} className="ml-2 px-2 py-1 bg-red-500 text-white rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
