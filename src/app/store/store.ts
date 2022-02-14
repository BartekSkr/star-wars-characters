import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from '../reducers/appReducer';

export const store = createStore(appReducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
