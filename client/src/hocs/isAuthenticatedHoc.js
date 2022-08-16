import { Navigate } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";
import useIsAuthenticated from "../hooks/useIsAuthenticated";

const isAuthorized = (Component) => {

    const WrapperComponent = (props) => {
        const isAuthenticated = useIsAuthenticated();
        const currentUser = useCurrentUser();

        return isAuthenticated
            ? <Component {...props} currentUser={currentUser} token={currentUser.sessionToken} />
            : <Navigate to="/login" />
    }

    return WrapperComponent;
}

export default isAuthorized;