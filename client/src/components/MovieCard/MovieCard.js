import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import styles from './MovieCard.module.css';

function MovieCard({ movie }) {
    const summary = summarize(movie.description, 90);
    return (
        <Card className={styles.card} >
            <Card.Img height={260} variant="top" src={movie.imageUrl} />
            <Card.Body>
                <Card.Title className={styles.cardHeading}>{movie.title}</Card.Title>
                <Card.Text>{summary}</Card.Text>
                <Button as={NavLink} to={`/details/${movie._id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

function summarize(property, limit) {
    return property.length > limit ? property.substring(0, limit) + '...' : property;

}

export default MovieCard;