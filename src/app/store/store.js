import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { favoriteListReducer } from '../reducers/appReducer';

export const store = createStore(favoriteListReducer, composeWithDevTools());
