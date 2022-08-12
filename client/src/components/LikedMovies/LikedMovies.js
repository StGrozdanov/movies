import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userLikedMovies } from "../../services/movieService";
import MovieList from "../MovieList/MovieList";

function LikedMovies() {
    const [movies, setMovies] = useState([]);
    const currentUser = useSelector(state => state.authenticationState.user);
    
    useEffect(() => {
        userLikedMovies(currentUser._id).then(movies => setMovies(movies)).catch(err => console.log(err));
    }, []);

    return (
        <MovieList
            movies={movies}
            heading={'Liked Movies'}
            missingMessage={'You have not liked any movies yet'}
        />
    );
}

export default LikedMovies;