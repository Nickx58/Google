import { useState } from "react";

const ColorInput = () => {
    const [inputValue, setInput] = useState("");
    const [color, setColor] = useState("Red")
    const [list, setList] = useState([]);

    const addField = () => {
        setList(prev => [...prev, { name: inputValue, color }])
    }
    return (
        <div>
            <input value={inputValue} onChange={e => setInput(e.target.value)} />
            <select value={color} onChange={e => setColor(e.target.value)}>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
            </select>
            <button onClick={addField}>Add</button>
            {list && list.map((el) => {
                return (
                    <div>
                        <p style={{ color: el.color }}>{el.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ColorInput;
