import { useSelector } from "react-redux";

function useCurrentUser() {
    return useSelector(state => state.authenticationState.user);
}

export default useCurrentUser;