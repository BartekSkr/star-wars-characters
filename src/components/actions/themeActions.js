import { SET_DARK_THEME, SET_LIGHT_THEME } from './types'

export const setLightTheme = () => {
  return {
    type: SET_LIGHT_THEME,
    payload: 'light'
  }
}

export const setDarkTheme = () => {
  return {
    type: SET_DARK_THEME,
    payload: 'dark'
  }
}