import {combineReducers, createStore} from "redux";
// import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;