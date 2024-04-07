import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";

const authState = []

const authReducer = (state = authState, action) => {
    switch (action.type) {

    case 'ADD_ITEM':
        return state.concat(action.data)

    default:
        return state
    }
}

export default createStore(authReducer, composeWithDevTools())