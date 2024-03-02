import { combineReducers, legacy_createStore as createStore } from "redux";
import contentReducer from "./content-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    contentPage: contentReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;