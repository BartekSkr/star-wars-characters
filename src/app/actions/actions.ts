import { ActionTypes } from '../actions/types';
import { CharacterInterface } from '../interface/interface';

interface SetThemeInterface {
  type: typeof ActionTypes.IS_DARK_THEME;
}

interface AddToFavoritesInterface {
  type: typeof ActionTypes.ADD_TO_FAVORITES;
  payload: CharacterInterface;
}

interface RemoveFromFavoritesInterface {
  type: typeof ActionTypes.REMOVE_FROM_FAVORITES;
  payload: CharacterInterface;
}

interface DeleteFavoriteList {
  type: typeof ActionTypes.DELETE_FAVORITE_LIST;
}

interface LoadingInterface {
  type: typeof ActionTypes.IS_LOADING;
  payload: boolean;
}

interface DisplayResultsInterface {
  type: typeof ActionTypes.IS_DISPLAY;
  payload: boolean;
}

interface FetchDataInterface {
  type: typeof ActionTypes.FETCH_DATA_FROM_API;
  payload: CharacterInterface[];
}

interface CharacterNumbersInterface {
  type: typeof ActionTypes.CHARACTERS_AMOUNT;
  payload: number;
}

interface SearchErrorInterface {
  type: typeof ActionTypes.SEARCH_ERROR;
  payload: boolean;
}

interface CharacterDetailsInterface {
  type: typeof ActionTypes.CHARACTER_DETAILS;
  payload: CharacterInterface[];
}

interface PageNumberInterface {
  type: typeof ActionTypes.PAGE_NUMBER;
  payload: number;
}

export type Actions =
  | SetThemeInterface
  | AddToFavoritesInterface
  | RemoveFromFavoritesInterface
  | DeleteFavoriteList
  | LoadingInterface
  | DisplayResultsInterface
  | FetchDataInterface
  | CharacterNumbersInterface
  | SearchErrorInterface
  | CharacterDetailsInterface
  | PageNumberInterface;

export const setTheme = (): SetThemeInterface => {
  return {
    type: ActionTypes.IS_DARK_THEME,
  };
};

export const addToFavorites = (
  character: CharacterInterface
): AddToFavoritesInterface => {
  return {
    type: ActionTypes.ADD_TO_FAVORITES,
    payload: character,
  };
};

export const removeFromFavorites = (
  character: CharacterInterface
): RemoveFromFavoritesInterface => {
  return {
    type: ActionTypes.REMOVE_FROM_FAVORITES,
    payload: character,
  };
};

export const deleteFavoriteList = (): DeleteFavoriteList => {
  return {
    type: ActionTypes.DELETE_FAVORITE_LIST,
  };
};

export const setLoading = (isLoading: boolean): LoadingInterface => {
  return {
    type: ActionTypes.IS_LOADING,
    payload: isLoading,
  };
};

export const setDisplay = (isDisplay: boolean): DisplayResultsInterface => {
  return {
    type: ActionTypes.IS_DISPLAY,
    payload: isDisplay,
  };
};

export const fetchData = (data: CharacterInterface[]): FetchDataInterface => {
  return {
    type: ActionTypes.FETCH_DATA_FROM_API,
    payload: data,
  };
};

export const setCharactersAmount = (
  number: number
): CharacterNumbersInterface => {
  return {
    type: ActionTypes.CHARACTERS_AMOUNT,
    payload: number,
  };
};

export const setSearchError = (isError: boolean): SearchErrorInterface => {
  return {
    type: ActionTypes.SEARCH_ERROR,
    payload: isError,
  };
};

export const setCharacterDetails = (
  character: CharacterInterface[]
): CharacterDetailsInterface => {
  return {
    type: ActionTypes.CHARACTER_DETAILS,
    payload: character,
  };
};

export const setPageNumber = (number: number): PageNumberInterface => {
  return {
    type: ActionTypes.PAGE_NUMBER,
    payload: number,
  };
};
