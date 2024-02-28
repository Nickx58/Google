import React, { useState } from "react";
import Button from "../components/Button";

const CounterPage = () => {
    const [count, setCount] = useState(5);
    const [value, setValue] = useState();

    const handleSubmit = e => {
        e.preventDefault();

        setCount(count => count + value)
        setValue(0)
    }
    return (
        <div>
            <h1 className="text-lg">Count is: {count}</h1>
            <div className="flex flex-row">
                <Button onClick={() => setCount(count => count + 1)}>Increment</Button>
                <Button onClick={() => setCount(count => count - 1)}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot value</label>
                <input
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                    value={value || ''}
                    onChange={e => setValue(parseInt(e.target.value) || 0)}
                />
                <Button>Add</Button>
            </form>
        </div>
    )
}

export default CounterPage