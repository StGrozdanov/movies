import PaginationBar from '../Pagination/PaginationBar';
import MovieList from "../MovieList/MovieList";
import { useEffect, useState } from 'react';
import { countMovies, getAllMovies } from '../../services/movieService';
import { useLocation } from 'react-router-dom';
import LoadingMovieList from '../MovieList/LoadingMovieList';

function Catalogue() {
    const [movies, setMovies] = useState([]);
    const [moviesCount, setMoviesCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const currentPage = location.search.split('=')[1] || 1;
        getAllMovies(currentPage)
            .then(movies => {
                setMovies(movies);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(true);
            });
    }, [location]);

    useEffect(() => {
        countMovies().then(movies => setMoviesCount(movies.count)).catch(err => console.log(err));
    }, []);

    return (
        <>
            {
                isLoading
                    ? <LoadingMovieList />
                    : <MovieList movies={movies} />
            }
            <PaginationBar moviesCount={moviesCount} setMovies={setMovies} />
        </>
    );
}

export default Catalogue;