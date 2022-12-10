import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import useIsAuthenticated from '../../hooks/useIsAuthenticated';
import useCurrentUser from '../../hooks/useCurrentUser'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GuestNavigation from './GuestNavigation';
import AuthenticatedNavigation from './AuthenticatedNavigation';
import styles from './Navbar.module.css';

function Navigation() {
    const [active, setActive] = useState('home');
    const [searchField, setSearchField] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();
    const user = useCurrentUser();

    useEffect(() => setSearchField(''), [active]);

    function searchHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const query = formData.get('search');
        if (query.trim() !== '') {
            navigate(`/search?whereName=${query}`)
        }
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <div className={styles['brand-image-container']}>
                    <img className={styles['brand-image']} src="pictures/favicon.ico" alt="broken img" />
                </div>
                <Navbar.Brand as={NavLink} className={styles.brand} to="/">Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                        activeKey={active}
                        onSelect={(selectedKey) => setActive(selectedKey)}
                    >
                        <Nav.Link as={NavLink} to="/" eventKey={'home'} >Home</Nav.Link>
                        {
                            isAuthenticated
                                ? <AuthenticatedNavigation dispatch={dispatch} navigate={navigate} user={user} />
                                : <GuestNavigation />
                        }
                    </Nav>
                    <p style={{ margin: 0, marginRight: 20 }}>
                        Welcome, {isAuthenticated ? user.username : 'Guest'}
                    </p>
                    <Form className="d-flex" onSubmit={searchHandler}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            name='search'
                            value={searchField}
                            onChange={(e) => setSearchField(e.target.value)}
                        />
                        <Button variant="outline-success" type='submit'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;