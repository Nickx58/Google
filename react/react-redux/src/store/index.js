import { configureStore } from "@reduxjs/toolkit";
import { songReducer, addSong, removeSong } from "./slices/songSlice";
import { movieReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { reset } from "./actions";


const store = configureStore({
    reducer: {
        songs: songReducer,
        movies: movieReducer
    }
})

export { store, reset, addMovie, removeMovie, addSong, removeSong };