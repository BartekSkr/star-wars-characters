import { ADD_TO_FAVOURITES, DELETE_FAVOURITE_LIST, DELETE_FROM_FAVOURITES } from './types'

export const addToFavourites = character => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: character
  }
}

export const deleteFromFavourites = character => {
  return {
    type: DELETE_FROM_FAVOURITES,
    payload: character
  }
}

export const deleteFavouriteList = () => ({ type: DELETE_FAVOURITE_LIST })