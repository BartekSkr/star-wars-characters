import { createReducer } from '@reduxjs/toolkit';
import { CharacterInterface } from '../helpers/types';
import {
  addToList,
  deleteList,
  darkTheme,
  removeFromList,
  setPage,
  setUrl,
  isAllCharacters,
  characterToFindName,
  setIsError,
} from './actions';
import { InitialInterface } from './types';

const favoritesList = JSON.parse(localStorage.getItem('favorites') || '[]');
const isDarkTheme = JSON.parse(
  localStorage.getItem('isDarkTheme') ||
    `${
      localStorage.getItem('isDarkTheme') === null
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : false
    }`
);

const INITIAL_STATE: InitialInterface = {
  favoriteList: favoritesList,
  isDarkTheme: isDarkTheme,
  page: '1',
  url: '',
  isAllCharacters: true,
  characterNameToFind: '',
  isError: false,
};

export const appReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(darkTheme, (state, action) => {
      state.isDarkTheme = !state.isDarkTheme;
    })
    .addCase(addToList, (state, action) => {
      state.favoriteList = [...state.favoriteList, action.payload];
    })
    .addCase(removeFromList, (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (character: CharacterInterface) =>
          character.name !== action.payload.name
      );
    })
    .addCase(deleteList, (state, action) => {
      state.favoriteList = [];
    })
    .addCase(setPage, (state, action) => {
      state.page = action.payload;
    })
    .addCase(setUrl, (state, action) => {
      state.url = action.payload;
    })
    .addCase(isAllCharacters, (state, action) => {
      state.isAllCharacters = action.payload;
    })
    .addCase(characterToFindName, (state, action) => {
      state.characterNameToFind = action.payload;
    })
    .addCase(setIsError, (state, action) => {
      state.isError = action.payload;
    });
});
