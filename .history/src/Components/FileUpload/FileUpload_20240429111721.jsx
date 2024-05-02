import React, { useState } from 'react';
import { Storage } from '@aws-amplify/storage';
import { Auth } from '@aws-amplify/auth';
import {API, graphqlOperation } from 'aws-amplify/api';
import { createFile } from "../graphql/mutations";
import { FaUpload } from 'react-icons/fa';
import awsExports from "../aws-exports";

const UploadFil= () => {
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            console.error("No file selected");
            return;
        }

        try {
            const uploadedFile = await Storage.put(file.name, file, {
                level: 'protected', // or 'public'/'private' based on your requirement
                contentType: file.type // to set the MIME type, which helps S3 to handle the file correctly
            });

            const fileNew = {
                query: graphqlOperation(createFile, {
                    input: {
                        name: file.name,
                        file: {
                            bucket: awsExports.aws_user_files_s3_bucket,
                            region: awsExports.aws_user_files_s3_bucket_region,
                            key: uploadedFile.key
                        }
                    }
                })
            };

            const newFile = await API.graphql(fileNew);
            console.log("File created:", newFile);
        } catch (e) {
            console.error("Error uploading file:", e);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create File</h2>
            <label>
                <input
                    type="file"
                    name="file"
                    onChange={e => setFile(e.target.files[0])}
                />
                <input type="submit" value="Create" />
            </label>
        </form>
    );
};

export default UploadFilePage;