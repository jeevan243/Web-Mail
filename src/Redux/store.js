import { applyMiddleware, legacy_createStore } from "redux";
import { mailReducer } from "./reducer";


const thunk = (store) => (next) => (action) => {
    if (typeof action === "function") return action(store.dispatch)
    next(action)
}



export const store = legacy_createStore(mailReducer, applyMiddleware(thunk))