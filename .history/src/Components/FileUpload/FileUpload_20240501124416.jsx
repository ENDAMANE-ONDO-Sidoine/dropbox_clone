import React, { useState } from 'react';
import { GraphQLAPI, graphqlOperation } from '@aws-amplify/api-graphql';
import { uploadData as StorageUpload } from '@aws-amplify/storage';
import { createFile } from '../../graphql/mutations';
import { FaUpload } from 'react-icons/fa';

export default function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      console.error('No file selected');
      return; // Stoppe l'exécution si aucun fichier n'est sélectionné
    }

    try {
      const timestamp = new Date().getTime(); // Créer un horodatage unique
      const storagePath = `uploads/${timestamp}_${file.name}`;
      await StorageUpload(storagePath, file, {
        contentType: file.type,
      });

      const fileDetails = {
        input: {
          name: file.name,
          storagePath: storagePath,
          ownerId: 'anonymous', // Vous pouvez mettre une valeur fixe ou laisser vide
        },
      };

      const newFile = await GraphQLAPI.graphql(graphqlOperation(createFile, fileDetails));
      console.log('File uploaded and record created:', newFile);
    } catch (error) {
      console.error('Error uploading file and creating record:', error);
    }
  };

  return (
    <div className="p-4 w-[93%] border rounded flex justify-center items-center mx-auto border-blue-600 bg-white shadow">
      <input type="file" onChange={handleFileChange} className="border-blue-600" />
      <button onClick={handleUpload} className="px-2 py-2 bg-blue-500 text-white rounded flex gap-2 items-center">
        <FaUpload className="text-white hover:text-green-600" /> Upload
      </button>
    </div>
  );
}
