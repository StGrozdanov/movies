import MovieCard from "../MovieCard/MovieCard";
import styles from './Catalogue.module.css';

function UserMovieCollection() {
    return (
        <>
            <section className={styles['catalogue-section']}>
                <article className={styles["user-info"]}>
                    <img
                        className={styles["user-avatar"]}
                        src="https://staffsenate.uncg.edu/wp-content/uploads/2018/11/Avatar.png"
                        alt="user-profile"
                    />
                    <body className={styles["user-content"]}>
                        <p>Username: ${sessionStorage.getItem('username')}</p>
                        <p>My Added Movies Count: ${0}</p>
                    </body>
                </article>
                <h3 className={styles.heading}>Created Movies</h3>
                <article className={styles.container}>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </article>
            </section>
        </>
    );
}

export default UserMovieCollection;