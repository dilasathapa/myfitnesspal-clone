import { legacy_createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = legacy_createStore(reducer, applyMiddleware(logger, thunk));

export { store };