import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";

const cartState = []

const cartReducer = (state = cartState, action) => {
    switch (action.type) {

    case 'ADD_ITEM':
        return state.concat(action.data)

    case 'REMOVE_ITEM':
        return state.filter(el => el.id !== action.data.id)

    default:
        return state
    }
}

export default createStore(cartReducer, composeWithDevTools())