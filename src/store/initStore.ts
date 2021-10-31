import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export function initStore() {
    const initStore = {};

    const store = createStore(rootReducer, initStore, composeWithDevTools(applyMiddleware(thunk)));
    return store;
}