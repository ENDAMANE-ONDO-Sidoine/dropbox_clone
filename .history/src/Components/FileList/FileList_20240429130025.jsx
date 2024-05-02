import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from '@aws-amplify/api'; // Importez API et graphqlOperation depuis @aws-amplify/api
import { listFiles } from '../../graphql/queries'; // Vérifiez le chemin

export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const fileData = await API.graphql(graphqlOperation(listFiles)); // Utilisez API.graphql au lieu de GraphQLAPI.graphql
        if (fileData.data.listFiles) {
          setFiles(fileData.data.listFiles.items);
        }
      } catch (err) {
        console.error('Error fetching files:', err);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="p-4">
      <h3 className="mb-2 text-lg font-semibold">List of Files</h3>
      <ul>
        {files.map((file) => (
          <li key={file.id} className="border-b py-2 flex justify-between items-center">
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
