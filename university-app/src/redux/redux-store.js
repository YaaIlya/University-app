import { combineReducers, legacy_createStore as createStore } from "redux";
import contentReducer from "./content-reducer";
import dialogReducer from "./dialog-reducer";

let reducers = combineReducers({
    contentPage: contentReducer,
    dialogsPage: dialogReducer
});

let store = createStore(reducers);

export default store;