import MovieList from "../MovieList/MovieList";
import styles from './Catalogue.module.css';

function UserMovieCollection() {
    return (
        <>
            <article className={styles["user-info"]}>
                <img
                    className={styles["user-avatar"]}
                    src="https://staffsenate.uncg.edu/wp-content/uploads/2018/11/Avatar.png"
                    alt="user-profile"
                />
                <body className={styles["user-content"]}>
                    <p>Username: {sessionStorage.getItem('username')}</p>
                    <p>My Added Movies Count: {0}</p>
                </body>
            </article>
            <MovieList />
        </>
    );
}

export default UserMovieCollection;