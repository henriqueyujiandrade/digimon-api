import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import digimonReducer from "./modules/digimons/reducers";

const reducers = combineReducers({digimons: digimonReducer});

const store = createStore(reducers, applyMiddleware(thunk))

export default store