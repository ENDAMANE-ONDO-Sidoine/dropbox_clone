import React, { useState } from 'react';
import { GraphQLAPI, graphqlOperation } from '@aws-amplify/api-graphql';
import { uploadData as StorageUpload } from '@aws-amplify/storage';
import { createFile } from '../../graphql/mutations';
import { FaUpload } from 'react-icons/fa';

export default function FileUpload({ user }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!user || !user.username) {
      setMessage('User or username is undefined');
      return;
    }
    if (!file) {
      setMessage('No file selected');
      return;
    }

    setLoading(true);
    try {
      const storagePath = `uploads/${user.username}/${file.name}`;
      await StorageUpload(storagePath, file, {
        contentType: file.type,
      });

      const fileDetails = {
        input: {
          name: file.name,
          storagePath,
          ownerId: user.id,
        },
      };

      const newFile = await GraphQLAPI.graphql(graphqlOperation(createFile, fileDetails));
      setMessage('File uploaded successfully!');
      console.log('File uploaded and record created:', newFile);
    } catch (error) {
      console.error('Error uploading file and creating record:', error);
      setMessage('Failed to upload file.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 w-[94%] border rounded flex justify-center items-center mx-auto border-blue-600 bg-white shadow">
      {message && <p className="text-red-500">{message}</p>}
      <input type="file" onChange={handleFileChange} className="border-blue-600" disabled={loading} />
      <button onClick={handleUpload} disabled={loading} className="px-2 py-2 bg-blue-500 text-white rounded flex gap-2 items-center">
        {loading ? 'Uploading...' : <><FaUpload className="text-white hover:text-green-600" /> Upload</>}
      </button>
    </div>
  );
}
