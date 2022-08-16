import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const isAuthorized = (Component) => {

    const WrapperComponent = (props) => {
        const authenticationState = useSelector(state => state.authenticationState);
        const isAuthenticated = authenticationState.isAuthenticated;
        const currentUser = authenticationState.user;

        return isAuthenticated
            ? <Component {...props} currentUser={currentUser} token={currentUser.sessionToken} />
            : <Navigate to="/login" />
    }

    return WrapperComponent;
}

export default isAuthorized;