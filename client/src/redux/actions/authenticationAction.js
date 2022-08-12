const login = (user) => {
    return {
        type: "LOG_IN",
        payload: { user, isAuthenticated: true }
    }
}

const logout = () => {
    return {
        type: "LOG_OUT",
    }
}