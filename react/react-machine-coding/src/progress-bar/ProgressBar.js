import './style.css';
import { useState, useEffect } from "react";

const ProgressBar = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const int = setInterval(() => {
            setValue((prevValue) => {
                if (prevValue < 100) {
                    return prevValue + 1;
                } else {
                    clearInterval(int);
                    return prevValue;
                }
            });
        }, 100);

        return () => clearInterval(int);
    }, []);

    return (
        <div className="progress">
            <span>{value.toFixed()}%</span>
            <div className='progress-bar' style={{ width: `${value}%` }} />
        </div>
    );
}

export default ProgressBar;
