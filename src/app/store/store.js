import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { favouriteListReducer } from '../reducers/favouritesReducer'
import { themeReducer } from '../reducers/themeReducer'

const rootReducers = combineReducers({
  theme: themeReducer,
  favourites: favouriteListReducer
})

export const store = createStore(rootReducers, composeWithDevTools())