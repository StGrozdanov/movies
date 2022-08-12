import MovieCard from "../MovieCard/MovieCard";
import styles from './Catalogue.module.css';

function MovieList({ movies }) {
    return (
        <section className={styles['catalogue-section']}>
            <h3 className={styles.heading}>Movie Catalogue</h3>
            <article className={styles.container}>
                {
                    movies.length > 0
                        ? movies.map(movie => <MovieCard movie={movie} />)
                        : 'There are no movies in our library yet.'
                }
            </article>
        </section>
    );
}

export default MovieList;