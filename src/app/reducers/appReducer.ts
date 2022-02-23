import { Actions } from '../actions/actions';
import { ActionTypes } from '../actions/types';
import { InitialInterface } from '../interface/interface';

const favoritesList = JSON.parse(localStorage.getItem('favorites') || '[]');
const isDarkTheme = JSON.parse(
  localStorage.getItem('isDarkTheme') ||
    `${
      localStorage.getItem('isDarkTheme') === null
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : false
    }`
);

export const INITIAL_STATE: InitialInterface = {
  favoriteList: favoritesList,
  dataFromApi: [],
  characterDetails: [],
  isDarkTheme: isDarkTheme,
  isLoading: false,
  isDisplay: false,
  charactersAmount: 0,
  isError: false,
  pageNumber: 1,
};

export const appReducer = (state = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload],
      };
    case ActionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteList: state.favoriteList.filter(
          (character) => character.name !== action.payload.name
        ),
      };
    case ActionTypes.DELETE_FAVORITE_LIST:
      return {
        ...state,
        favoriteList: [],
      };
    case ActionTypes.IS_DARK_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    case ActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ActionTypes.IS_DISPLAY:
      return {
        ...state,
        isDisplay: action.payload,
      };
    case ActionTypes.FETCH_DATA_FROM_API:
      return {
        ...state,
        dataFromApi: action.payload,
      };
    case ActionTypes.CHARACTERS_AMOUNT:
      return {
        ...state,
        charactersAmount: action.payload,
      };
    case ActionTypes.SEARCH_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    case ActionTypes.CHARACTER_DETAILS:
      return {
        ...state,
        characterDetails: action.payload,
      };
    case ActionTypes.PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload,
      };
    default:
      return state;
  }
};
