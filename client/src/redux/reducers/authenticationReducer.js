const initialAuthenticationState = { user: {}, isAuthenticated: false }

const authenticationReducer = (state = initialAuthenticationState, action) => {
    switch (action.type) {
        case "LOG_IN": return state = action.payload;
        case "LOG_OUT": return state = initialAuthenticationState;
        default: return state = initialAuthenticationState;
    }
}

export default authenticationReducer;