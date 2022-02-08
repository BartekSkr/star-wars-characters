import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { favoriteListReducer } from '../reducers/favoritesReducer';
import { themeReducer } from '../reducers/themeReducer';

const rootReducers = combineReducers({
  theme: themeReducer,
  favorites: favoriteListReducer,
});

export const store = createStore(rootReducers, composeWithDevTools());
