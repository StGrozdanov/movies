import MovieCard from "../MovieCard/MovieCard";
import styles from './Catalogue.module.css';

function MovieList({ movies, heading, missingMessage }) {
    return (
        <section className={styles['catalogue-section']}>
            <h3 className={styles.heading}>{heading}</h3>
            <article className={styles.container}>
                {
                    movies.length > 0
                        ? movies.map(movie => <MovieCard movie={movie} />)
                        : missingMessage
                }
            </article>
        </section>
    );
}

export default MovieList;