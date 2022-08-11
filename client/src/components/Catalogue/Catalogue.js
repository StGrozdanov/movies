import MovieCard from "../MovieCard/MovieCard";
import styles from './Catalogue.module.css';
import PaginationBar from '../Pagination/PaginationBar';

function Catalogue() {
    return (
        <>
            <section className={styles['catalogue-section']}>
                <h3 className={styles.heading}>Movie Catalogue</h3>
                <article className={styles.container}>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </article>
            </section>
            <PaginationBar />
        </>
    );
}

export default Catalogue;