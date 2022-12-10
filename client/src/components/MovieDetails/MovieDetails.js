import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteMovie, getSingleMovie, likeMovie, unlikeMovie } from "../../services/movieService";
import Badge from 'react-bootstrap/Badge';
import useIsAuthenticated from '../../hooks/useIsAuthenticated';
import useCurrentUser from '../../hooks/useCurrentUser'
import ConfirmModal from "../Common/ConfirmModal";
import LikeUnlikeButton from '../LikeUnlikeButton/LikeUnlikeButton'
import MovieDetailsControl from "./MovieDetailsControl";

function MovieDetails() {
    const [movie, setMovie] = useState({});
    const [likes, setLikes] = useState(0);
    const [likedByCurrentUser, setLikedByCurrentUser] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isOwner, setIsOwner] = useState(false);
    const params = useParams();
    const navigate = useNavigate();
    const currentUser = useCurrentUser();
    const isAuthenticated = useIsAuthenticated();

    const movieId = params.id;

    useEffect(() => {
        getSingleMovie(movieId)
            .then(movie => {
                setMovie(movie);
                setLikes(movie.likedBy.length);
                movie.likedBy.includes(currentUser._id) && setLikedByCurrentUser(true);
                isAuthenticated && currentUser._id === movie._ownerId ? setIsOwner(true) : setIsOwner(false);
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

    async function deleteHandler() {
        await deleteMovie(movieId, currentUser.sessionToken);
        navigate('/');
    }

    function hideModalHandler() {
        setShowModal(false);
    }

    const likeButton = likedByCurrentUser
        ? <LikeUnlikeButton likedByCurrentUser={likedByCurrentUser} handler={unlikeHandler} />
        : <LikeUnlikeButton likedByCurrentUser={likedByCurrentUser} handler={likeHandler} />

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
                            {isAuthenticated && likeButton}
                            <Badge bg="primary" style={{ padding: 5, fontSize: '100%' }}>
                                <span style={{ marginRight: 5 }}>Likes</span>
                                <Badge bg="info">{likes}</Badge>
                            </Badge>
                        </div>
                        {isOwner && <MovieDetailsControl setShowModal={setShowModal} />}
                    </div>
                </div>
            </div>
            <ConfirmModal
                message={`You are about to delete ${movie.title}`}
                showModal={showModal}
                hideModal={hideModalHandler}
                handler={deleteHandler}
            />
        </div>
    );
}

export default MovieDetails;