import React from 'react';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import Checkbox from "@mui/material/Checkbox";

const ToggleCard = (props) => {
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
              <div className="toggle-list">
                <ul className='list-items'>
                  <li>
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                    />
                    First Year

                  </li>
                  <li> <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                    />
                    Second Year</li>
                  <li> <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                    />
                    Third Year</li>
                  <li> <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                    />
                    Fourth Year</li>
                </ul>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ToggleCard;
