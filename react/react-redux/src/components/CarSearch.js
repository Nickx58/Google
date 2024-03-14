import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { searchTermChange } from "../store/slices/carsSlice";

const CarSearch = () => {
    const dispatch = useDispatch()
    const searchTerm = useSelector(state => state.cars.searchTerm)
    const handleSearchTermChange = e => {
        dispatch(searchTermChange(e.target.value))
    }
    return (
        <div>
            <input
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </div>
    )
}

export default CarSearch;
