import { createSlice, nanoid } from "@reduxjs/toolkit"

const carSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: "",
        cars: []
    },
    reducers: {
        searchTermChange(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state, action) {
            const updated = state.cars.filter(car => car.id !== action.payload)
            state.cars = updated
        }
    }
})

export const { addCar, removeCar, searchTermChange } = carSlice.actions;
export const carReducer = carSlice.reducer