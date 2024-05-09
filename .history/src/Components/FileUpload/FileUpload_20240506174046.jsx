import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
import { createFile } from '../../graphql/mutations';
import { FaUpload } from 'react-icons/fa';

Amplify.configure(awsExports);

export default function FileUpload({ user }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('text-red-500'); // Ajout d'un état pour la couleur du message

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
      const uploadedFile = await Amplify.Storage.put(storagePath, file, {
        contentType: file.type
      });

      const fileDetails = {
        input: {
            name: file.name,
            storagePath,
            ownerId: user.id,
            bucket: awsExports.aws_user_files_s3_bucket,
            region: awsExports.aws_user_files_s3_bucket_region,
            key: uploadedFile.key
        }
      };

      const newFile = await Amplify.API.graphql({
        query: createFile,
        variables: { input: fileDetails.input }
      });
      setMessage('File uploaded successfully!');
      setMessageColor('text-green-600 font-bold'); 
      console.log('File uploaded and record created:', newFile);
    } catch (error) {
      console.error('Error uploading file and creating record:', error);
      setMessage('Failed to upload file.');
      setMessageColor('text-red-500'); 
    } finally {
      setLoading(false);import React from 'react';
import { uploadData } from 'aws-amplify/storage';

function App() {
    const [file, setFile] = React.useState();

    const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        } else {
            // Handle the case where no file is selected
            console.error("No file selected");
        }
    };

    const handleUpload = () => {
        if (!file) {
            console.error("No file selected for upload");
            return;
        }

        uploadData({
            path: `picture-submissions/${file.name}`,
            data: file,
        })
        .then(result => {
            console.log("Upload successful:", result);
            // Handle success
        })
        .catch(error => {
            console.error("Error uploading file:", error);
            // Handle error
        });
    };

    return (
        <div>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>
                Upload
            </button>
        </div>
    );
}

    }
  };

  return (
    <div className="p-4 w-[93%] border rounded flex justify-center items-center mx-auto border-blue-600 bg-white shadow">
      {message && <p className={messageColor}>{message}</p>} 
      <input type="file" onChange={handleFileChange} className="border-blue-600" disabled={loading} />
      <button onClick={handleUpload} disabled={loading} className="px-2 py-2 bg-blue-500 text-white rounded flex gap-2 items-center">
        {loading ? 'Uploading...' : <><FaUpload className="text-white hover:text-green-600" /> Upload</>}
      </button>
    </div>
  );
}
