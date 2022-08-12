export const loginAction = (user) => {
    return {
        type: "LOG_IN",
        payload: { user, isAuthenticated: true }
    }
}

export const logoutAction = () => {
    return {
        type: "LOG_OUT",
    }
}