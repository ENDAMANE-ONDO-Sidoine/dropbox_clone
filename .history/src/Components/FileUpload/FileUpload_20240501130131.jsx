import React, { useState } from 'react';
import { GraphQLAPI, graphqlOperation } from '@aws-amplify/api-graphql';
import { Storage } from '@aws-amplify/storage';
import { createFile } from '../../graphql/mutations';
import { FaUpload } from 'react-icons/fa';

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Capture the file from input
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    setUploading(true);
    setMessage('');
    const timestamp = new Date().getTime(); // Unique timestamp for file naming
    const storagePath = `uploads/${timestamp}_${file.name}`;

    try {
      // Upload the file to AWS S3
      await Storage.put(storagePath, file, {
        contentType: file.type, // Set the content type for proper handling in S3
      });

      const fileDetails = {
        input: {
          name: file.name,
          storagePath: storagePath,
          ownerId: 'anonymous', // Static owner or can be dynamic if authenticated
        },
      };

      // Create a record in the database via GraphQL
      const newFile = await GraphQLAPI.graphql(graphqlOperation(createFile, fileDetails));
      setMessage('File uploaded successfully!');
      console.log('File uploaded and record created:', newFile);
    } catch (error) {
      console.error('Error uploading file and creating record:', error);
      setMessage('Failed to upload file. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 w-[93%] border rounded flex flex-col justify-center items-center mx-auto border-blue-600 bg-white shadow">
      <input type="file" onChange={handleFileChange} className="border-blue-600" />
      <button onClick={handleUpload} className="px-2 py-2 bg-blue-500 text-white rounded flex gap-2 items-center mt-2" disabled={uploading}>
        <FaUpload className="text-white hover:text-green-600" /> {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {message && <p className="text-red-500 mt-2">{message}</p>}
    </div>
  );
}
