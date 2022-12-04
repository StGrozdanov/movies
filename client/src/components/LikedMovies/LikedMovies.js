import { useEffect, useState } from "react";
import isAuthorized from "../../hocs/isAuthenticatedHoc";
import { userLikedMovies } from "../../services/movieService";
import LoadingMovieList from "../MovieList/LoadingMovieList";
import MovieList from "../MovieList/MovieList";

function LikedMovies({ currentUser }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        userLikedMovies(currentUser._id)
            .then(movies => {
                setMovies(movies);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(true);
                console.log(err);
            });
    }, []);

    return (
        isLoading
            ?
            <LoadingMovieList />
            :
            <MovieList
                movies={movies}
                heading={'Liked Movies'}
                missingMessage={'You have not liked any movies yet'}
            />
    );
}

export default isAuthorized(LikedMovies);