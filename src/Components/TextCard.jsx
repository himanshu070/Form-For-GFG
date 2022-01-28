import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import "../CSS/TextCard.css";
const TextCard = (props) => {
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
              {props.title}
            </Typography>
          </CardContent>
          <inputField  className="inputField">
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
              />
            </Box>
          </inputField>
        </Card>
      </div>
    </>
  );
};

export default TextCard;