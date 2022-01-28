import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import "../CSS/TextCard.css";
const TextCard = ({title, value, setInputVal, name}) => {
  
  const handleChange = (e)=>{
    setInputVal({
      ...value,
      [name] : e.target.value
    })
  }
  return (
    <>
      <div id="card-div">
        <Card id="card" sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography
              class="card-title"
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
          </CardContent>
          <inputField className="inputField">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Your answer"
                variant="standard"
                onChange={handleChange}
              />
            </Box>
          </inputField>
        </Card>
      </div>
    </>
  );
};

export default TextCard;
