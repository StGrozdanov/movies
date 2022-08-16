import { useSelector } from "react-redux";

function useIsAuthenticated() {
    return useSelector(state => state.authenticationState.isAuthenticated);
}

export default useIsAuthenticated;