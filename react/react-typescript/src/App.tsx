import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Status } from "./components/Status";
import { TextChildren } from "./components/Text";

const bikesList = [{ name: "Speed 400" }, { name: "Scram 411" }];
const carObject = {
  name: "Virtus",
  type: "Sedan",
};

function App() {
  return (
    <div className="App">
      <Greet bikesList={bikesList} name="Nikhil" carObject={carObject} />
      <Status status="success" />
      <TextChildren>
        <Heading>Nikhil Will Join Google</Heading>
      </TextChildren>
    </div>
  );
}

export default App;
