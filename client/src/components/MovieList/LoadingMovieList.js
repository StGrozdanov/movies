import { v4 as uuid } from 'uuid';
import LoadingMovieCard from "../MovieCard/LoadingMovieCard"
import styles from './Catalogue.module.css';

function LoadingMovieList() {
    return (
        <section className={styles['catalogue-section']}>
            <article className={styles.container}>
                {
                    <>
                        <LoadingMovieCard key={uuid()} />
                        <LoadingMovieCard key={uuid()} />
                        <LoadingMovieCard key={uuid()} />
                        <LoadingMovieCard key={uuid()} />
                    </>
                }
            </article>
        </section>
    );
}

export default LoadingMovieList;