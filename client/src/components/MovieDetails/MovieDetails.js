import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../../services/movieService";

function MovieDetails() {
    const [movie, setMovie] = useState({});
    const params = useParams();
    const movieId = params.id;

    useEffect(() => {
        getSingleMovie(movieId).then(movie => setMovie(movie)).catch(err => console.log(err));
        console.log(movie);
    }, []);

    return (
        <div className="card mb-3" style={{ width: '60vw', margin: '20px auto' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        className="img-fluid rounded-start"
                        src={movie.imageUrl}
                        alt="Broken image" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.description}</p>
                        <p className="card-text">
                            <small className="text-muted">Release year: {movie.year}</small>
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <button className="btn btn-primary" style={{ marginRight: 10 }}>Like</button>
                            <span>Likes: {movie.likedBy.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;