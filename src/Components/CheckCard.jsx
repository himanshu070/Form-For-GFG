import React from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";



const CheckCard = ({ title, value, setInputVal, name }) => {
    
    const [val, changeVal] = React.useState({
        one: false,
        two: false,
        three: true
    });
    
    // const handleChange1 = (e)=>{
    //    setInputVal({
    //      ...value,
    //      [name]: e.target.value
    //    })
    // }

    // const handleChange2 = (e) => {
    //   setInputVal({
    //     ...value,
    //     [name]: e.target.value,
    //   });
    // };

    // const handleChange3 = (e) => {
    //   setInputVal({
    //     ...value,
    //     [name]: e.target.value,
    //   });
    // };

    const toggle1 = (e)=>{
      changeVal({
        ...val,
        one: !val.one
      })
       setInputVal({
         ...value,
         name: e.target.value,
       });
    }
    const toggle2 = (e) => {
      changeVal({
        ...val,
        two: !val.two,
      });
       setInputVal({
         ...value,
         [name]: e.target.value,
       });
    };
    const toggle3 = (e) => {
      changeVal({
        ...val,
        three: !val.three,
      });
       setInputVal({
         ...value,
         [name]: e.target.value,
       });
    };
    
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
              <div className="check-list">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    checked={val.one}
                    label="Marketing"
                    onChange={(toggle1)}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    checked={val.two}
                    label="Content"
                    onChange={(toggle2)}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    checked={val.three}
                    label="UI/UX"
                    onChange={(toggle3)}
                  />
                </FormGroup>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CheckCard;
