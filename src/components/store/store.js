import { combineReducers, createStore } from 'redux'
import { favouriteListReducer } from '../reducers/favouritesReducer'
import { themeReducer } from '../reducers/themeReducer'

const combine = combineReducers({ favouriteListReducer, themeReducer })

export const store = createStore(
  // favouriteListReducer,
  combine,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
