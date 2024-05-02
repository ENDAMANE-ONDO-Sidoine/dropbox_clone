import React, { useEffect, useState } from 'react';
import { GraphQLAPI, graphqlOperation } from '@aws-amplify/api-graphql';
import { listFiles } from '../../graphql/queries'; // Make sure this path is correct
import { deleteFile } from '../../graphql/mutations'; // Make sure this path is correct

export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const fileData = await GraphQLAPI.graphql(graphqlOperation(listFiles));
      if (fileData.data.listFiles) {
        setFiles(fileData.data.listFiles.items);
      }
    } catch (err) {
      console.error('Error fetching files:', err);
    }
  };

  const handleDelete = async (fileId) => {
    try {
      const deleteInput = {
        input: {
          id: fileId
        }
      };
      await GraphQLAPI.graphql(graphqlOperation(deleteFile, deleteInput));
      fetchFiles();  // Refresh the list after a file is deleted
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <div className="p-4">
      <h3 className="mb-2 text-lg font-semibold">List of Files</h3>
      <ul>
        {files.map((file) => (
          <li key={file.id} className="border-b py-2 flex justify-between items-center">
            {file.name}
            <button onClick={() => handleDelete(file.id)} className="ml-4 px-3 py-1 bg-red-500 text-white rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
