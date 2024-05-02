import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Storage } from '@aws-amplify/storage';
import { createFile } from '../../graphql/mutations';
import { FaUpload } from 'react-icons/fa';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); 
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    setMessage('');
    setUploading(true);

    try {
      const timestamp = new Date().toISOString();
      const storagePath = `uploads/${timestamp}_${file.name}`;

      const result = await Storage.put(storagePath, file, {
        contentType: file.type,
      });

      const fileDetails = {
        input: {
          name: file.name,
          storagePath: result.key,
        },
      };

      await API.graphql(graphqlOperation(createFile, fileDetails));
      setMessage('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
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
};

export default FileUpload;
