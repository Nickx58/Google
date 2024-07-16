import { useState } from "react";
import './style.css'

function Cell({ filled, onClick, disabled }) {
    return (
        <button disabled={disabled} onClick={onClick} className={filled ? "cell cell-activated" : "cell"} />
    )
}
const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

const GridLight = () => {
    const [orders, setOrders] = useState([]);
    const [isDeactivite, setIsDeactivite] = useState(false);

    const deactivateCell = () => {
        setIsDeactivite(true);
        const timer = setInterval(() => {
            setOrders((oldOrder) => {
                const newOrder = oldOrder.slice();
                newOrder.pop();
                if (newOrder.length === 0) {
                    clearInterval(timer);
                    setIsDeactivite(false)
                }
                return newOrder;
            })
        }, 300)
    }

    const handleClick = index => {
        // activate
        const newOrders = [...orders, index];
        setOrders(newOrders)

        // deactivate
        if (newOrders.length === config.flat().filter(Boolean).length) {
            deactivateCell();
        }
    }
    console.log(orders)
    return (
        <div className="wrapper">
            <div className="grid">
                {config.flat().map((item, index) => {
                    return item ? (
                        <Cell
                            key={index}
                            filled={orders.includes(index)}
                            disabled={orders.includes(index) || isDeactivite}
                            onClick={() => handleClick(index)}
                        />
                    ) : <span></span>
                })}
            </div>
            <div>Selected Order: {JSON.stringify(orders)}</div>
        </div>
    )
}

export default GridLight;
