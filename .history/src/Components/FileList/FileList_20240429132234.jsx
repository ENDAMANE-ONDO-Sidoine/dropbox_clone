import React, { useEffect, useState } from 'react';
import { GraphQLAPI, graphqlOperation } from '@aws-amplify/api-graphql';
import { listFiles } from '../../graphql/queries'; // Vérifiez le chemin
import { FaFile, FaFolderOpen } from 'react-icons/fa';
export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
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

    fetchFiles();
  }, []);

  return (
    <div className="p-4">
      <h3 className="mb-2 text-3xl font-extrabold text-blue-600 flex gap-4 items-center "><FaFolderOpen className='text-ye'/>LIST OF FILES</h3>
      <ul>
        {files.map((file) => (
          <li key={file.id} className="border-b py-2 flex justify-between items-center">
            <FaFile />
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
