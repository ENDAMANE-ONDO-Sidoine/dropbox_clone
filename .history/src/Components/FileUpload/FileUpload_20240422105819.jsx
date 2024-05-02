import React, { useState } from 'react';

const FileUploader = () => {
    const [f setFile] = useState(null); // State to store the selected file

    const onFileChange = (event) => {
        console.log("File selected: ", event.target.files[0]); // Log the selected file to the console
        setFile(event.target.files[0]); // Update the state with the new file
    };

    return (
        <div className="m-5 p-5 border-4 border-green-500">  {/* Using Tailwind CSS for styling */}
            <input type="file" className="mb-3" onChange={onFileChange} />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => console.log("Upload button clicked")}>
                Upload File
            </button>
            {/* This button uses Tailwind CSS for a nicer appearance with hover effects */}
        </div>
    );
};

export default FileUploader;
