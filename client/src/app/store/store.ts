import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from '../reducers/appReducer';

export const store = configureStore({ reducer: appReducer });

export type RootState = ReturnType<typeof store.getState>;
