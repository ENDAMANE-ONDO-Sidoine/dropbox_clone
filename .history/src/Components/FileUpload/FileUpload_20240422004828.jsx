// Example FileUploader.jsx
import { Storage } from 'aws-amplify';

const FileUploader = () => {
    const onFileChange = async (event) => {
        const file = event.target.files[0];
        try {
            await Storage.put(file.name, file, {
                contentType: file.type  // important for S3 to know how to handle the file
            });
            alert('File uploaded successfully!');
        } catch (err) {
            alert('Error uploading file:', err);
        }
    };

    return <input type="file" onChange={onFileChange} />;
};
