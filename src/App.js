import "./App.css";
import TextCard from "./Components/TextCard";
import ToggleCard from "./Components/ToggleCard";
import Button from "@mui/material/Button";
import "./CSS/App.css";
import { useState } from "react";
function App() {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    year: "",
    branch: "",
    questions: "",
  });

  const submit = () => {
    console.log(inputVal);
  };
  return (
    <div className="app-js">
      <TextCard
        title={"Name *"}
        value={inputVal}
        setInputVal={setInputVal}
        name="name"
      />
      <TextCard
        title={"Email *"}
        value={inputVal}
        setInputVal={setInputVal}
        name="email"
      />
      <ToggleCard title={"Year"}
        value={inputVal}
        setInputVal={setInputVal}
        name="year"
      />
      <TextCard
        title={"Branch: *"}
        value={inputVal}
        setInputVal={setInputVal}
        name="branch"
      />
      <TextCard
        title={"Any questions you would like to ask the panelists:"}
        value={inputVal}
        setInputVal={setInputVal}
        name="questions"
      />
      <Button onClick={submit} variant="contained" color="success">
        Success
      </Button>
    </div>
  );
}

export default App;
