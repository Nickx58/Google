import "./App.css";
import { Greet } from "./components/Greet";

const bikesList = [{ name: "Speed 400" }, { name: "Scram 411" }];
const carObject = {
  name: "Virtus",
  type: "Sedan",
};

function App() {
  return (
    <div className="App">
      <Greet bikesList={bikesList} name="Nikhil" carObject={carObject} />
    </div>
  );
}

export default App;
