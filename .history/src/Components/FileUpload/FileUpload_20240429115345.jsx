import React, { useState } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { createFile } from '..../graphql/mutations';  
export default function FileUpload({ user }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const storagePath = `uploads/${user.username}/${file.name}`;
      await Storage.put(storagePath, file, {
        contentType: file.type,
      });

      const fileDetails = {
        input: {
          name: file.name,
          storagePath: storagePath,
          ownerId: user.id
        }
      };

      const newFile = await API.graphql(graphqlOperation(createFile, fileDetails));
      console.log('File uploaded and record created:', newFile);
    } catch (error) {
      console.error('Error uploading file and creating record:', error);
    }
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <button onClick={handleUpload} className="px-4 py-2 bg-blue-500 text-white rounded">
        Upload
      </button>
    </div>
  );
}
