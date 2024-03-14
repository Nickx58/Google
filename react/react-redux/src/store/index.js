import { configureStore } from "@reduxjs/toolkit";
import { songReducer, addSong, removeSong } from "./slices/songSlice";
import { movieReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { carReducer, searchTermChange, addCar, removeCar } from './slices/carsSlice'
import { formReducer, changeName, changeCost } from './slices/formSlice'
import { reset } from "./actions";


const store = configureStore({
    reducer: {
        songs: songReducer,
        movies: movieReducer,
        form: formReducer,
        cars: carReducer
    }
})

export { store, reset, addMovie, removeMovie, addSong, removeSong, searchTermChange, addCar, removeCar, changeCost, changeName };