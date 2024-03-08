import "./styles.css";
import { useDispatch } from "react-redux";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarPrice from "./components/CarPrice";


import { reset } from "./store";

export default function App() {
    const dispatch = useDispatch();
    const handleResetClick = () => {
        dispatch(reset());
    };

    return (
        <div className="container is-fluid">
            <button onClick={() => handleResetClick()} className="button is-danger">
                Reset Both Playlists
            </button>
            <hr />
            <MoviePlaylist />
            <hr />
            <SongPlaylist />
            <hr />
            <div className="car-container">
                <CarForm />
                <CarSearch />
                <CarList />
                <CarPrice />
            </div>
        </div>
    );
}
