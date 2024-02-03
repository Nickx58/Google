import React, { useState } from "react";
import DropDown from "../components/DropDown";

const options = [
  { label: "Red", value: "red" },
  { label: "Black", value: "black" },
  { label: "yellow", value: "yellow" },
];

function DropDownPage() {
  const [selection, onSelection] = useState(null);

  const handleSelection = (option) => {
    onSelection(option);
  };
  return (
    <div className="app">
      <h1>React Comp</h1>
      <DropDown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
}

export default DropDownPage;
