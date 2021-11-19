import { ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES } from '../actions/types'

export const initialState = {
  listName: 'Favourite characters',
  list: []
}

export const favouriteListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    case DELETE_FROM_FAVOURITES:
      return {
        ...state,
        list: state.list.filter(character => character.name !== action.payload.name)
      }
    default:
      return state
  }
}
