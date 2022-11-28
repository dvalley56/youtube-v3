import { PhotoCamera } from "@mui/icons-material";
import {  Box, Typography, IconButton, Divider } from "@mui/material";
import { useState } from "react";

const Upload = () => {
    const [file, setFile] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    
    const changeHandler = (e) => {
        let selected = e.target.files[0];
    
        if (selected && types.includes(selected.type)) {
            setFile(selected);
        } else {
            setFile(null);
        }
    };
    
    return (

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          height: "100vh",
          background: "#111",
          mt: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "white",
            mb: 2,
          }}
        >
          Upload
        </Typography>

        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          size="large"
        >
            <input
                type="file"
                onChange={changeHandler}
                style={{ display: "none" }}
            />
          <PhotoCamera />
        </IconButton>

        {/* Show file metadata id file is selected */}
        {file && (
            
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                mt: 2,
            }}
            >
            <Divider variant="middle"/>
                <Typography

                    variant="h6"
                    fontWeight="bold"
                    sx={{
                        color: "white",
                        mb: 2,
                    }}
                >
                    Name: {file.name}
                </Typography>
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                        color: "white",
                        mb: 2,
                    }}
                >
                    Size: {file.size} bytes
                </Typography>

                </Box>
        )}
      </Box>

    );
}

export default Upload;