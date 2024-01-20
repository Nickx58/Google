import "./App.css";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
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
      <Button handleClick={(e, n) => console.log("Called", e, n)} />
      <Input value="Nick" handleChange={(e) => console.log(e)} />
    </div>
  );
}

export default App;
