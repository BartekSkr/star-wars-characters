import {
  ADD_TO_FAVORITES,
  DELETE_FAVORITE_LIST,
  DELETE_FROM_FAVORITES,
  SET_THEME,
} from './types';

export const addToFavorites = (character) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: character,
  };
};

export const deleteFromFavorites = (character) => {
  return {
    type: DELETE_FROM_FAVORITES,
    payload: character,
  };
};

export const deleteFavoriteList = () => ({ type: DELETE_FAVORITE_LIST });

export const setTheme = () => ({ type: SET_THEME });
