import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

function AuthenticatedNavigation() {
    return (
        <>
            <Nav.Link as={NavLink} to="/create" eventKey={'create'}>Create Movie</Nav.Link>
            <Nav.Link as={NavLink} to="/my-collection" eventKey={'my-collection'}>My Collection</Nav.Link>
            <Nav.Link as={NavLink} to="/liked" eventKey={'liked'}>Liked Movies</Nav.Link>
            <Nav.Link as={NavLink} to="/logout" eventKey={'logout'}>Logout</Nav.Link>
        </>
    );
}

export default AuthenticatedNavigation;