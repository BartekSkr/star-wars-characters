import { SET_THEME } from '../actions/types';

const themeColor = JSON.parse(localStorage.getItem('isDarkTheme') || true);

export const INITIAL_STATE = {
  isDarkTheme: themeColor,
};

export const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return state;
  }
};
