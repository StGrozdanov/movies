import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userCreatedMovies } from "../../services/movieService";
import MovieList from "../MovieList/MovieList";
import styles from './Catalogue.module.css';

function UserMovieCollection() {
    const [movies, setMovies] = useState([]);
    const currentUser = useSelector(state => state.authenticationState.user);

    useEffect(() => {
        userCreatedMovies(currentUser._id).then(movies => setMovies(movies)).catch(err => console.log(err));
    }, []);

    return (
        <>
            <article className={styles["user-info"]}>
                <img
                    className={styles["user-avatar"]}
                    src="https://staffsenate.uncg.edu/wp-content/uploads/2018/11/Avatar.png"
                    alt="user-profile"
                />
                <body className={styles["user-content"]}>
                    <p>Username: {currentUser.username}</p>
                    <p>My Movies Count: {movies.length}</p>
                </body>
            </article>
            <MovieList
                movies={movies}
                heading={'Created Movies'}
                missingMessage={'You have not created any movies yet'}
            />
        </>
    );
}

export default UserMovieCollection;