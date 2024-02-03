import React from "react";
import Link from "./components/Link";

function App() {
  return (
    <div className="app">
      <Link to="/accordion">Go to Accordion</Link>
      <Link to="/dropdown">Go to DropDown</Link>
    </div>
  );
}

export default App;
