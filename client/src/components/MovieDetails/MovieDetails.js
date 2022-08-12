import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleMovie, likeMovie, unlikeMovie } from "../../services/movieService";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from "react-redux";

function LikesButton({ handler, title, className }) {
    return (
        <button
            className={className}
            style={{ marginRight: 10 }}
            onClick={handler}
        >
            {title}
        </button>
    );
}

function MovieDetails() {
    const [movie, setMovie] = useState({});
    const [likes, setLikes] = useState(0);
    const [likedByCurrentUser, setLikedByCurrentUser] = useState(false);

    const params = useParams();
    const authenticationState = useSelector(state => state.authenticationState);
    const currentUser = authenticationState.user;
    const isAuthenticated = authenticationState.isAuthenticated;

    const movieId = params.id;

    useEffect(() => {
        getSingleMovie(movieId)
            .then(movie => {
                setMovie(movie);
                setLikes(movie.likedBy.length);
                movie.likedBy.includes(currentUser._id) && setLikedByCurrentUser(true);
            })
            .catch(err => console.log(err));
    }, []);

    async function likeHandler() {
        await likeMovie(movieId, currentUser.sessionToken);
        setLikes((likes) => likes += 1);
        setLikedByCurrentUser(true);
    }

    async function unlikeHandler() {
        await unlikeMovie(movieId, currentUser.sessionToken);
        setLikes((likes) => likes -= 1);
        setLikedByCurrentUser(false);
    }

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
                            {
                                isAuthenticated
                                    ?
                                    likedByCurrentUser
                                        ? <LikesButton title={'Unlike'} handler={unlikeHandler} className={'btn btn-danger'} />
                                        : <LikesButton title={'Like'} handler={likeHandler} className={'btn btn-success'} />
                                    : ''

                            }
                            <Badge bg="primary" style={{ padding: 5, fontSize: '100%' }}>
                                <span style={{ marginRight: 5 }}>Likes</span>
                                <Badge bg="info">{likes}</Badge>
                            </Badge>
                        </div>
                        {
                            isAuthenticated
                            &&
                            <div
                                style={{
                                    display: 'flex',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 20,
                                }}
                            >
                                <Button variant="warning" style={{ width: 75, marginRight: 20 }}>Edit</Button>
                                <Button variant="danger" style={{ width: 75 }}>Delete</Button>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;