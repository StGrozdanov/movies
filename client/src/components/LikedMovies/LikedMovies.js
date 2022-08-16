import { useEffect, useState } from "react";
import isAuthorized from "../../hocs/isAuthenticatedHoc";
import { userLikedMovies } from "../../services/movieService";
import MovieList from "../MovieList/MovieList";

function LikedMovies({ currentUser }) {
    const [movies, setMovies] = useState([]);
    
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

export default isAuthorized(LikedMovies);