import { createStore } from 'redux'
import { favouriteListReducer } from '../reducers/favouritesReducer'

export const store = createStore(
  favouriteListReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
