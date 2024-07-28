import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

const App = () => {
  const [progressBars, setProgressBars] = useState([]);

  const addProgressBar = () => {
    setProgressBars((prevBars) => [...prevBars, 0]);
  };

  const updateProgress = (index) => {
    setProgressBars((prevBars) =>
      prevBars.map((value, i) => (i === index ? value + 5 : value))
    );
  };

  React.useEffect(() => {
    if (progressBars.length > 0) {
      const incompleteIndex = progressBars.findIndex((value) => value < 100);
      if (incompleteIndex !== -1) {
        const interval = setInterval(() => {
          updateProgress(incompleteIndex);
        }, 100);

        return () => clearInterval(interval);
      }
    }
  }, [progressBars]);

  return (
    <div className="App">
      <Button onClick={addProgressBar}>Add Progress Bar</Button>
      <div className="progress-container">
        {progressBars.map((value, index) => (
          <div key={index} className="progress">
            <div className="progress-bar" style={{ width: `${value}%` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
