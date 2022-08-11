import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './MovieCard.module.css';

function MovieCard() {
    return (
        <Card className={styles.card} style={{ width: '16rem'}}>
            <Card.Img height={260} variant="top" src="https://i.ebayimg.com/images/g/B~EAAOSw6Wld9iAJ/s-l500.jpg" />
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Movie Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;