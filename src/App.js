import './App.css';
import TextCard from './Components/TextCard';
import ToggleCard from "./Components/ToggleCard";
import Button from "@mui/material/Button";
import './CSS/App.css'
function App() {
  return (
    <div className="app-js">
      <TextCard title={"Name *"} />
      <TextCard title={"Email *"} />
      <ToggleCard title={"Year"} />
      <TextCard title={"Branch: *"} />
      <TextCard title={"Any questions you would like to ask the panelists:"} />
      <Button variant="contained" color="success">
        Success
      </Button>
    </div>
  );
}

export default App;
