import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";

const reducersCollection = combineReducers({
    authenticationState: authenticationReducer,
});

export default reducersCollection;