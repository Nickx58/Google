import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProgressBarSeries from "./progress-variations/ProgressBar2";
import ProgressBar3 from "./progress-variations/ProgressBar3";

function ProgressBar() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (value < 100) {
        setValue((value) => value + 5);
      }
    }, 100);
    if (value > 100) {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [value]);

  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${value}%` }} />
    </div>
  );
}

const DynamicProgressBar = () => {
  const [bar, setBars] = useState(0);

  return (
    <div>
      <Button onClick={() => setBars(bar + 1)}>Add</Button>
      {Array(bar)
        .fill(1)
        .map((_, index) => {
          return <ProgressBar key={index} />;
        })}
      <div style={{ marginTop: "16px" }}>
        <h5 style={{ marginBottom: "8px" }}>
          The progress bars fill up in series, aka the second bar only starts
          filling up after the first bar is completely filled.
        </h5>
        <ProgressBarSeries />
      </div>
      <div style={{ marginTop: "16px" }}>
        <h5 style={{ marginBottom: "8px" }}>
          we'll build progress bars where multiple of them are filling up
          concurrently, up to a limit of 3. The fourth progress bar only starts
          filling up after the third one is full.
        </h5>
        <ProgressBar3 />
      </div>
    </div>
  );
};

export default DynamicProgressBar;
