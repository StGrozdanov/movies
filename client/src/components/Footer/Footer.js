import Card from 'react-bootstrap/Card';
import styles from './Footer.module.css';

function Footer() {
    return (
        <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>Movies MERN Stack</Card.Title>
                <Card.Text>
                    Visit my other projects
                    <ul className={styles['project-links-list']}>
                        <a
                            href='https://st-grozdanov-portfolio.web.app/'
                            target="_blank"
                            className={styles['project-links']}
                        >
                            <img className={styles['project-images']} src="https://st-grozdanov-portfolio.web.app/favicon.png" alt="" />
                        </a>
                        <a
                            href='https://forge-my-physique.web.app/'
                            target="_blank"
                            className={styles['project-links']}
                        >
                            <img className={styles['project-images']} src="https://forge-my-physique.web.app/assets/pictures/forge.png" alt="" />
                        </a>
                        <a
                            href='https://recepti-na-shushanite.web.app/'
                            target="_blank"
                            className={styles['project-links']}
                        >
                            <img className={styles['project-images']} src="https://st-grozdanov-portfolio.web.app/assets/images/cooking.png" alt="" />
                        </a>
                    </ul>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">All rights reserved © St Grozdanov 2022</Card.Footer>
        </Card>
    );
}

export default Footer;