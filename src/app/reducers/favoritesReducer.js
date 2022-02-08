import {
  ADD_TO_FAVORITES,
  DELETE_FAVORITE_LIST,
  DELETE_FROM_FAVORITES,
} from '../actions/types';

const favoritesList = JSON.parse(localStorage.getItem('favorites') || '[]');

export const INITIAL_STATE = {
  listName: 'Favorite characters',
  list: favoritesList,
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
    default:
      return state;
  }
};
