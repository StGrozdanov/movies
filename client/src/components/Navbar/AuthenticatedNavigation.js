import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { logoutAction } from '../../redux/actions/authenticationAction';
import { logout } from '../../services/userService';

function AuthenticatedNavigation({ dispatch, navigate, user }) {
    async function logoutHandler(e) {
        e.preventDefault();
        await logout(user.sessionToken);
        dispatch(logoutAction());
        navigate('/');
    }

    return (
        <>
            <Nav.Link as={NavLink} to="/create" eventKey={'create'}>Create Movie</Nav.Link>
            <Nav.Link as={NavLink} to="/my-collection" eventKey={'my-collection'}>My Collection</Nav.Link>
            <Nav.Link as={NavLink} to="/liked" eventKey={'liked'}>Liked Movies</Nav.Link>
            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
        </>
    );
}

export default AuthenticatedNavigation;