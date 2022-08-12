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
        getAllMovies(currentPage).then(movies => setMovies(movies)).catch(err => console.log(err));
    }, [movies]);

    useEffect(() => {
        countMovies().then(movies => setMoviesCount(movies.count)).catch(err => console.log(err));
    }, []);

    return (
        <>
            <MovieList movies={movies} />
            <PaginationBar moviesCount={moviesCount} setMovies={setMovies} />
        </>
    );
}

export default Catalogue;