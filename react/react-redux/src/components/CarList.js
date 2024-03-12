import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
    const cars = useSelector(state => state.cars.cars)
    const dispatch = useDispatch()
    const handleCarDelete = car => {
        dispatch(removeCar(car.id))
    }
    return (
        <div className="car-list">
            {cars?.map((car) => {
                return (
                    <div key={car.id} className="panel">
                        <p> {car?.name} - ${car.cost} </p>
                        <button onClick={() => handleCarDelete(car)} className="button is-danger">Delete</button>
                    </div>
                )
            })}
            <hr />
        </div>
    )
}

export default CarList;