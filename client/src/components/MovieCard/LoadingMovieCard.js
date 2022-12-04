import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder'
import styles from './MovieCard.module.css';

function LoadingMovieCard() {
    return (
        <Card className={styles.card} >
            <Card.Img height={260} variant="top" src="pictures/loading-image.gif" />
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
        </Card>
    )
}

export default LoadingMovieCard;