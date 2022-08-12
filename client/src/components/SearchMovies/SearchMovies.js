import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchByMovieTitle } from "../../services/movieService";
import MovieList from "../MovieList/MovieList";

function SearchMovies() {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    const query = location.search.split('=')[1];

    useEffect(() => {
        searchByMovieTitle(query).then(movies => setMovies(movies)).catch(error => console.log(error));
    }, [location]);

    return (
        <MovieList
            movies={movies}
            heading={`Movies with title containing: ${query}`}
            missingMessage={`There were no movies with title containing ${query}`}
        />
    );
}

export default SearchMovies;