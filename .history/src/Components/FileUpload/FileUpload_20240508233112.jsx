import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
import { createFile } from '../graphql/mutations';
import { FaUpload } from 'react-icons/fa';
import { uploadData } from 'aws-amplify/storage';
import { API, graphqlOperation } from '@aws-amplify/api-graphql'; 

Amplify.configure(awsExports);

export default function FileUpload({ user }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('text-red-600 font-bold');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!user || !user.username) {
      setMessage('User or username is undefined');
      setMessageColor('text-green-600 font-bold');
      return;
    }
    if (!file) {
      setMessage('No file selected 😬');
      setMessageColor('text-red-600 font-bold mr-2');
      return;
    }

    setLoading(true);
    try {
      const storagePath = `uploads/${user.username}/${file.name}`;

      uploadData({
        path: storagePath,
        data: file
      });

      const fileDetails = {
        input: {
          name: file.name,
          storagePath,
          ownerId: user.id,
          bucket: awsExports.aws_user_files_s3_bucket,
          region: awsExports.aws_user_files_s3_bucket_region,
          key: storagePath
        }
      };

      const result = await API.graphql(graphqlOperation(createFile, fileDetails.input));
      console.log('CreateFile result:', result); 

      setMessage('File uploaded successfully!');
      setMessageColor('text-green-600 font-bold');
    } catch (error) {
      console.error('Error uploading file and creating record:', error);
      setMessage('Failed to upload file ❌');
      setMessageColor('text-red-600 font-bold mr-2');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 w-[93%] border rounded flex justify-center items-center mx-auto border-blue-600 bg-white shadow">
      {message && <p className={messageColor}>{message}</p>}
      <input type="file" onChange={handleFileChange} className="border-blue-600" disabled={loading} />
      <button onClick={handleUpload} disabled={loading} className="px-2 py-2 bg-blue-500 text-white rounded flex gap-2 items-center hover:bg-green-600 transform transition duration-500 ease-in-out hover:scale-110 font-bold">
        {loading ? 'Uploading...' : <><FaUpload className="text-white hover:text-green-600" /> Upload</>}
      </button>
    </div>
  );
}
