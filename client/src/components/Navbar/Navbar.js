import { useState } from 'react';
import { NavLink } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    const [active, setActive] = useState('home');

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
                        <Nav.Link as={NavLink} to="/login" eventKey={'login'}>Login</Nav.Link>
                        <Nav.Link as={NavLink} to="/register" eventKey={'register'}>Register</Nav.Link>
                        <Nav.Link as={NavLink} to="/create" eventKey={'create'}>Create Movie</Nav.Link>
                    </Nav>
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