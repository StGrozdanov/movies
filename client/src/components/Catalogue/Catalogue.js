import PaginationBar from '../Pagination/PaginationBar';
import MovieList from "../MovieList/MovieList";

function Catalogue() {
    return (
        <>
            <MovieList />
            <PaginationBar />
        </>
    );
}

export default Catalogue;