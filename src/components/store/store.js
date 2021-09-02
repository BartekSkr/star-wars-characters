import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { favouriteListReducer } from '../reducers/favouritesReducer'

// export let store = createStore(favouriteList)

// store.subscribe(() => console.log(store.getStore()))

// store.dispatch(addToFavourites())

// const initialState = {}
// const middleware = [thunk]

// export const store = createStore(
//   favouriteListReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// )

export const store = createStore(
  favouriteListReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
