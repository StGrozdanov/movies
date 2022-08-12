import MovieCard from "../MovieCard/MovieCard";
import styles from './Catalogue.module.css';

function MovieList() {
    return (
        <section className={styles['catalogue-section']}>
            <h3 className={styles.heading}>Movie Catalogue</h3>
            <article className={styles.container}>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </article>
        </section>
    );
}

export default MovieList;