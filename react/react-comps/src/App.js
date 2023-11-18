import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="app">
      <h1>React Comp</h1>
      <div>
        <Button primary>Primary</Button>
      </div>
      <div>
        <Button secondary>Secondary</Button>
      </div>
      <div>
        <Button success>Success</Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger rounded>Danger</Button>
      </div>
    </div>
  );
}

export default App;
