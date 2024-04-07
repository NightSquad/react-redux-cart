import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";


let rootReducer = combineReducers({authReducer, cartReducer})

export const store = createStore(rootReducer, composeWithDevTools())