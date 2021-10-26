import { ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES, GET_FAVOURITES } from '../actions/types'

export const initialState = {
  favouriteCharacters: [],
  favouriteCharacter: {}
}

export const favouriteListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      initialState.favouriteCharacters.unshift(action.payload)
      return {
        ...state,
        favouriteCharacter: action.payload
      }
    case DELETE_FROM_FAVOURITES:
      initialState.favouriteCharacters
        .splice(
          initialState.favouriteCharacters
            .map(character => character.name)
            .indexOf(action.payload.name), 1)
      return {
        ...state,
        favouriteCharacter: action.payload
      }
    case GET_FAVOURITES:
      return state.favouriteCharacters
    default:
      return state
  }
}
