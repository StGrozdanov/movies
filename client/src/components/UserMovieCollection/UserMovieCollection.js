import { useEffect, useState } from "react";
import isAuthorized from "../../hocs/isAuthenticatedHoc";
import { userCreatedMovies } from "../../services/movieService";
import LoadingMovieList from "../MovieList/LoadingMovieList";
import MovieList from "../MovieList/MovieList";
import styles from './Catalogue.module.css';

function UserMovieCollection({ currentUser }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        userCreatedMovies(currentUser._id)
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
        <>
            <article className={styles["user-info"]}>
                <img
                    className={styles["user-avatar"]}
                    src="https://staffsenate.uncg.edu/wp-content/uploads/2018/11/Avatar.png"
                    alt="user-profile"
                />
                <span className={styles["user-content"]}>
                    <p>Username: {currentUser.username}</p>
                    <p>My Movies Count: {movies.length}</p>
                </span>
            </article>
            {
                isLoading
                    ?
                    <LoadingMovieList />
                    :
                    <MovieList
                        movies={movies}
                        heading={'Created Movies'}
                        missingMessage={'You have not created any movies yet'}
                    />
            }
        </>
    );
}

export default isAuthorized(UserMovieCollection);