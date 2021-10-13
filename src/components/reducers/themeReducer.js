import { SET_DARK_THEME, SET_LIGHT_THEME } from '../actions/types'

export const themeInitialState = {
  activeTheme: 'dark'
}

export const themeReducer = (state = themeInitialState, action) => {
  switch (action.type) {
    case SET_LIGHT_THEME:
      return {
        ...state,
        activeTheme: action.payload
      }
    case SET_DARK_THEME:
      return {
        ...state,
        activeTheme: action.payload
      }
    default:
      return state
  }
}