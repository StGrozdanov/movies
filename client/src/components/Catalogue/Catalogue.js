import PaginationBar from '../Pagination/PaginationBar';
import MovieList from "../MovieList/MovieList";
import { useEffect, useState } from 'react';
import { countMovies, getAllMovies } from '../../services/movieService';
import { useLocation } from 'react-router-dom';

function Catalogue() {
    const [movies, setMovies] = useState([]);
    const [moviesCount, setMoviesCount] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const currentPage = location.search.split('=')[1] || 1;
        getAllMovies(currentPage).then(setMovies(movies)).catch(err => console.log(err));
    }, []);

    useEffect(() => {
        countMovies().then(movies => setMoviesCount(movies.count)).catch(err => console.log(err));
    }, []);

    return (
        <>
            <MovieList movies={movies} />
            <PaginationBar moviesCount={moviesCount} />
        </>
    );
}

export default Catalogue;