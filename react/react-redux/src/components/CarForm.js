import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { changeName, changeCost, addCar } from '../store/index'

const CarForm = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.form.name)
    const cost = useSelector(state => state.form.cost)

    const handleNameChange = e => {
        const value = e.target.value
        dispatch(changeName(value))
    }
    const handleCostChange = e => {
        const value = parseInt(e.target.value) || 0;
        dispatch(changeCost(value))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const carObject = {
            name,
            cost
        }
        dispatch(addCar(carObject))
    }
    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input className="input is-expanded" type="text" value={name} onChange={handleNameChange} />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input className="input is-expanded" type="number" value={cost || ''} onChange={handleCostChange} />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CarForm;
