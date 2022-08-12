import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GuestNavigation from './GuestNavigation';
import AuthenticatedNavigation from './AuthenticatedNavigation';

function Navigation() {
    const [active, setActive] = useState('home');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authenticationState = useSelector(state => state.authenticationState);

    const isAuthenticated = authenticationState.isAuthenticated;
    const user = authenticationState.user;

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/">Movies</Navbar.Brand>
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
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;