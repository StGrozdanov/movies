import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './MovieCard.module.css';

function MovieCard({ movie }) {
    return (
        <Card className={styles.card} style={{ width: '16rem' }}>
            <Card.Img height={260} variant="top" src={movie.imageUrl} />
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;