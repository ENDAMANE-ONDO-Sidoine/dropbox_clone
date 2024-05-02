import React, { useState } from 'react';
import { GraphQLAPI, graphqlOperation } from '@aws-amplify/api-graphql';
import { Storage } from '@aws-amplify/storage';  // Correct import for Storage
import { createFile } from '../../graphql/mutations';
import { FaUpload } from 'react-icons/fa';

export default function FileUpload({ user }) {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false); // State to handle upload progress

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!user || !user.username) {
            console.error('User or username is undefined');
            alert("User information is not available. Please login."); // Provide user feedback
            return;
        }
        if (!file) {
            console.error('No file selected');
            alert("Please select a file to upload."); // Provide user feedback
            return;
        }

        setUploading(true); // Indicate uploading process has started

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

            const newFile = await GraphQLAPI.graphql(graphqlOperation(createFile, fileDetails));
            console.log('File uploaded and record created:', newFile);
            alert("File uploaded successfully!"); // Notify user of success
        } catch (error) {
            console.error('Error uploading file and creating record:', error);
            alert("Failed to upload file. Please try again."); // Notify user of failure
        } finally {
            setUploading(false); // Reset uploading state regardless of outcome
        }
    };

    return (
        <div className="p-4 w-[95%] border rounded flex justify-center items-center mx-auto border-blue-600">
            <input type="file" onChange={handleFileChange} className="border-blue-600" />
            <button onClick={handleUpload} disabled={uploading} className="px-2 py-2 bg-blue-500 text-white rounded flex gap-2 items-center">
                <FaUpload className="text-white" />
                {uploading ? "Uploading..." : "Upload"}
            </button>
        </div>
    );
}
