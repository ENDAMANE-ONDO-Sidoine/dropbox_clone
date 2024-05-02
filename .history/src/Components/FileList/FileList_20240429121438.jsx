import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from '@aws-amplify/api-graphql';
import { listFiles } from '../../graphql/queries'; // Assurez-vous que le chemin est correct
import { deleteFile } from '../../graphql/mutations'; // Assurez-vous que le chemin est correct

export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  async function fetchFiles() {
    try {
      const fileData = await API.graphql(graphqlOperation(listFiles));
      if (fileData.data.listFiles) {
        setFiles(fileData.data.listFiles.items);
      }
    } catch (err) {
      console.error('Error fetching files:', err);
    }
  }

  async function handleDelete(fileId) {
    try {
      const deleteInput = {
        input: {
          id: fileId
        }
      };
      await API.graphql(graphqlOperation(deleteFile, deleteInput));
      fetchFiles();  // Refresh the list after a file is deleted
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  }

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
