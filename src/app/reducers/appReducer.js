import {
  ADD_TO_FAVORITES,
  DELETE_FAVORITE_LIST,
  DELETE_FROM_FAVORITES,
  SET_THEME,
} from '../actions/types';

const favoritesList = JSON.parse(localStorage.getItem('favorites') || '[]');
const themeColor = JSON.parse(localStorage.getItem('isDarkTheme') || true);

export const INITIAL_STATE = {
  listName: 'Favorite characters',
  list: favoritesList,
  isDarkTheme: themeColor,
};

export const favoriteListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_FROM_FAVORITES:
      return {
        ...state,
        list: state.list.filter(
          (character) => character.name !== action.payload.name
        ),
      };
    case DELETE_FAVORITE_LIST:
      return {
        ...state,
        list: [],
      };
    case SET_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return state;
  }
};
