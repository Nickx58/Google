import React from "react";
import { useSelector } from "react-redux";

const CarPrice = () => {
    const totalCost = useSelector((state) => {
        const filterCar = state.cars.cars.filter(car => car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase()));
        return filterCar.reduce((acc, car) => {
            return acc + car.cost
        }, 0)
    })
    return (
        <div>
            Total Cost: ${totalCost}
        </div>
    )
}

export default CarPrice;
