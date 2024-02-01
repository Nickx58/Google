import React from "react";
import DropDown from "./components/DropDown";

const options = [
  { label: "Red", value: "red" },
  { label: "Black", value: "black" },
  { label: "yellow", value: "yellow" },
];

function App() {
  return (
    <div className="app">
      <h1>React Comp</h1>
      <DropDown options={options} />
    </div>
  );
}

export default App;
