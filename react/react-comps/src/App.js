import React from "react";
import Link from "./components/Link";
import Route from "./components/Route";
import AccordianPage from "./pages/AccordianPage";
import DropDownPage from "./pages/DropdownPage";

function App() {
  return (
    <div className="app">
      <Link to="/accordian">Go to Accordian</Link>
      <Link to="/dropdown">Go to DropDown</Link>
      <div>
        <Route path="/accordian">
          <AccordianPage />
        </Route>
        <Route path="/dropdown">
          <DropDownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
