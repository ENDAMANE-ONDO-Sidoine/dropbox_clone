import React, { useState } from 'react';
import { Storage } from 'aws-amplify';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (!file) return;
    try {
      const result = await Storage.put(file.name, file);
      console.log('Uploaded file: ', result);
      // handle successful file upload
    } catch (error) {
      console.error('Error uploading file', error);
      // handle error
    }
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default FileUpload;
