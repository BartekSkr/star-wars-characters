import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { favouriteListReducer } from '../reducers/favouritesReducer'

export const store = createStore(favouriteListReducer, composeWithDevTools())