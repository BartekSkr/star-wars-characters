import {
  ADD_TO_FAVOURITES,
  DELETE_FAVOURITE_LIST,
  DELETE_FROM_FAVOURITES,
} from '../actions/types';

const favouritesList = JSON.parse(localStorage.getItem('favourites') || '[]');

export const INITIAL_STATE = {
  listName: 'Favourite characters',
  list: favouritesList,
};

export const favouriteListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_FROM_FAVOURITES:
      return {
        ...state,
        list: state.list.filter(
          (character) => character.name !== action.payload.name
        ),
      };
    case DELETE_FAVOURITE_LIST:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
