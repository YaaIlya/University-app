import { combineReducers, legacy_createStore as createStore } from "redux";
import contentReducer from "./content-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import musicReducer from "./music-reducer";

let reducers = combineReducers({
    contentPage: contentReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    musicPage: musicReducer,
});

let store = createStore(reducers);

export default store;