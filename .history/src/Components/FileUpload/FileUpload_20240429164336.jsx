import React, { useState } from 'react';
import { API, graphqlOperation } from '@aws-amplify/api-graphql';
import { Storage } from '@aws-amplify/storage';
import { createFile } from '../../graphql/mutations';

const FileUpload = ({ user }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!user || !user.username) {
      console.error('User or username is undefined');
      return;
    }
    if (!file) {
      console.error('No file selected');
      return;
    }

    try {
      const storagePath = `uploads/${user.username}/${file.name}`;
      await Storage.put(storagePath, file, {
        contentType: file.type,
      });

      const fileDetails = {
        input: {
          name: file.name,
          storagePath,
          ownerId: user.id,
        },
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
};

export default FileUpload;
