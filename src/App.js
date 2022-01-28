import "./App.css";
import TextCard from "./Components/TextCard";
import ToggleCard from "./Components/ToggleCard";
import Button from "@mui/material/Button";
import "./CSS/App.css";
import { useState, useEffect } from "react";
import CheckCard from "./Components/CheckCard";
import Alert from "@mui/material/Alert";
import fetch from "isomorphic-fetch";
import Loading from "./Components/Loading";

function App() {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    year: "First Year",
    domain: ["", "", ""],
    discord: "",
  });
  const [isAlert, setIsAlert] = useState(false);
  const [isSucess, setIsSucess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState("");

  const submit = () => {
    setIsLoading(true);
    let flag = true;
    if (!inputVal.name) {
      // document.getElementsByClassName("name")
      document.getElementById("name").classList.add("error");
      flag = false;
      setIsLoading(false);
    }
    if (!inputVal.email) {
      // document.getElementsByClassName("name")
      document.getElementById("email").classList.add("error");
      flag = false;
      setIsLoading(false);
    }
    if (!inputVal.domain) {
      // document.getElementsByClassName("name")
      document.getElementById("domain").classList.add("error");
      flag = false;
      setIsLoading(false);
    }
    if (!inputVal.discord) {
      // document.getElementsByClassName("name")
      document.getElementById("discord").classList.add("error");
      flag = false;
      setIsLoading(false);
    }
    if (!flag) {
      setIsAlert(true);
      setIsSucess(false);
      setIsLoading(false);
    }

    if (flag) {
      setIsAlert(false);

      fetch(`https://gfgkiit-backend.herokuapp.com/upload-form`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputVal.name,
          email: inputVal.email,
          year: inputVal.year,
          domain: inputVal.domain,
          discord: inputVal.discord,
        }),
      })
        .then((response) => {
          localStorage.setItem("gfgreg", "true");
          setIsSucess(true);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  const getData = async () => {
    let data = await fetch("https://gfgkiit-backend.herokuapp.com/get-forms");
    let parsedData = await data.json();
    console.log(parsedData);
  };

  // Checking Is Submit

  useEffect(() => {
    if (localStorage.getItem("gfgreg")) {
      setIsSubmit(true);
    }
  }, [isLoading]);

  return (
    <>
      <div id="form-sucess" className={isSucess ? "" : "form-hidden"}>
        <Alert
          onClose={() => {
            setIsSucess(false);
          }}
        >
          Thanks for your submission!
        </Alert>
      </div>
      {!isSubmit ? (
        <div className="app-js">
          <div id="form-alert" className={isAlert ? "" : "form-hidden"}>
            <Alert className="form-alert-box" severity="error">
              Please fill all the fields
            </Alert>
          </div>

          <TextCard
            myId="name"
            title={"Name *"}
            value={inputVal}
            setInputVal={setInputVal}
            name="name"
          />
          <TextCard
            myId="email"
            title={"Email *"}
            value={inputVal}
            setInputVal={setInputVal}
            name="email"
          />
          <ToggleCard
            myId="year"
            title={"Year"}
            value={inputVal}
            setInputVal={setInputVal}
            name="year"
          />
          <CheckCard
            myId="domain"
            title={"Domain"}
            value={inputVal}
            setInputVal={setInputVal}
            name="domain"
          />
          <TextCard
            myId="discord"
            title={
              "Discord ID: ( ex: abcdg#1234) (In case you don't have a discord account, please make one. We will be communicating via discord for all team related activities.)"
            }
            value={inputVal}
            setInputVal={setInputVal}
            name="discord"
          />
          <div className="form-submit-button">
            <Button onClick={submit} variant="contained" color="success">
              Submit
            </Button>
            <Button onClick={getData} variant="contained" color="success">
              Get Data
            </Button>
          </div>
          {isLoading ? <Loading /> : ""}
        </div>
      ) : (
        <>
          <div>Already Submitted</div>
        </>
      )}
    </>
  );
}

export default App;
