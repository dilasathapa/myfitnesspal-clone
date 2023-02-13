import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRead = () => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setFileData(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <input type="file" onChange={handleChange} />
      <button onClick={handleRead}>Read</button>
      {fileData && <img src={fileData} alt="name" />}
    </>
  );
};

export default FileUpload;
