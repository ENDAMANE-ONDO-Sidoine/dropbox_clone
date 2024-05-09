import React from 'react';
import { uploadData } from 'aws-amplify/storage';

import React from 'react';

const FileUpload = () => {
  return (
    <div>
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
    </div>
  );
}

export default FileUpload;
 
