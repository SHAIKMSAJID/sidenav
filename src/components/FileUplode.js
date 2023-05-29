import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { storage} from "../config/firebase";
import {ref,uploadBytes} from "firebase/storage";
import {v4} from "uuid";


const MAX_FILE_SIZE = 2097152; // 500kb in bytes

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.size <= MAX_FILE_SIZE) {
      setSelectedFile(file);
      setErrorMessage("");
    } else {
      setSelectedFile(null);
      setErrorMessage(
        `File size should be less than ${Math.floor(
          MAX_FILE_SIZE / 1048576
        )}MB.`
      );
    }
  };

  const handleUpload = () => {
    const fileRef = ref(storage,'studentfiles/${selectedFile.name + v4()}');
    uploadBytes(fileRef,selectedFile).then(()=>{
      alert("Student Details uploaded ");
    });
    // Perform upload logic with selectedFile
    
    //console.log(selectedFile);
    // Reset selectedFile state if needed
    //setSelectedFile(null);
  };

  return (
    <div>
      <input
        type="file" 
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput">
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUploadIcon />}
          fullWidth
        >
          Upload File
        </Button>
      </label>
      <Typography variant="body1">
        {selectedFile
          ? `Selected File: ${selectedFile.name}`
          : "No file selected"}
      </Typography>
      {errorMessage && (
        <Typography variant="body1" color="error">
          {errorMessage}
        </Typography>
      )}
      <Button
        variant="contained"
        onClick={handleUpload}
        disabled={!selectedFile}
        fullWidth
        
      >
        Upload
      </Button>
    </div>
  );
};

export default FileUpload;