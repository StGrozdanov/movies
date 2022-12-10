import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";

function MovieDetailsControl({ setShowModal }) {
    const params = useParams();
    const navigate = useNavigate();
    const movieId = params.id;
    return (
        <div
            style={{
                display: 'flex',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
            }}
        >
            <Button
                variant="warning"
                style={{ width: 75, marginRight: 20 }}
                onClick={() => navigate(`/edit/${movieId}`)}
            >
                Edit
            </Button>
            <Button
                variant="danger"
                style={{ width: 75 }}
                onClick={() => setShowModal(true)}
            >
                Delete
            </Button>
        </div>
    )
}

export default MovieDetailsControl;