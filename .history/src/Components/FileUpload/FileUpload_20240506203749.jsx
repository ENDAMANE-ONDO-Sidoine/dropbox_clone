import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
import { createFile } from '../../graphql/mutations';
//import { FaUpload } from 'react-icons/fa';

Amplify.configure(awsExports);

const FileUpload = () => {
  const [file, setFile] = useState("");


  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const uploadedFile = await Storage.put(file.name, file);

          const fileNew = {
              query: createFile,
              variables: {
                  input: {
                      name: file.name,
                      file: {
                          bucket: awsExports.aws_user_files_s3_bucket,
                          region: awsExports.aws_user_files_s3_bucket_region,
                          key: uploadedFile.key
                      }
                  }
              },
              authMode: 'AMAZON_COGNITO_USER_POOLS'
          }

          const newFile = await API.graphql(fileNew);
          console.log(newFile)
      } catch (e) {
          alert(e);
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
              <input type="submit" value="create" />
          </label>
      </form>
  );
};