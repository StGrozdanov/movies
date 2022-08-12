import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

function GuestNavigation() {
    return (
        <>
            <Nav.Link as={NavLink} to="/login" eventKey={'login'}>Login</Nav.Link>
            <Nav.Link as={NavLink} to="/register" eventKey={'register'}>Register</Nav.Link>
        </>
    );
}

export default GuestNavigation;