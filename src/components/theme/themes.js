import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: 'whitesmoke',
  fontColor: 'black',
  accentColor: 'black'
}

export const darkTheme = {
  body: 'black',
  fontColor: 'whitesmoke',
  accentColor: 'yellow'
}

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    letter-spacing: 0.12rem;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
  }

  .container {
    width: 90%;
    margin: auto;
    padding-top: 0.5rem;
  }

  .navbar {
    border-bottom: 5px solid ${props => props.theme.accentColor};
  }

  .navbar h1 {
    color: ${props => props.theme.accentColor}
  }

  .navbar-link {
    color: ${props => props.theme.fontColor}
  }

  .navbar-link-active {
    color: ${props => props.theme.accentColor};
    border-bottom: 3px solid ${props => props.theme.accentColor};
  }

  .navbar-li:hover a {
    color: ${props => props.theme.accentColor};
  }

  .theme-button {
    color: ${props => props.theme.fontColor};
  }

  .theme-button:hover {
    color: ${props => props.theme.accentColor};
  }

  .spinner {
    color: ${props => props.theme.accentColor};
  }

  .spinner div::after {
    background: ${props => props.theme.accentColor};
  }

  .not-found-container > h2 {
    color: ${props => props.theme.accentColor};
  }

  .character {
    border: 3px solid ${props => props.theme.accentColor};
  }

  #initial-info-icon,
  .initial-info span {
    color ${props => props.theme.accentColor};
  }

  .character-info-header {
    color: ${props => props.theme.accentColor};
  }

  .add-button,
  .details-button {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.accentColor};
  }

  .search-input {
    border: 3px solid ${props => props.theme.fontColor}
  }

  .search-error {
    color: ${props => props.theme.accentColor};
  }

  .search-button {
    color: ${props => props.theme.accentColor};
  }

  .empty-list {
    color: ${props => props.theme.accentColor};
  }

  .pagination-a {
    color: ${props => props.theme.fontColor};
  }

  .pagination-a-active {
    border-bottom 3px solid ${props => props.theme.accentColor};
    color: ${props => props.theme.accentColor};
  }

  .pagination-li:hover pagination-a {
    color: ${props => props.theme.accentColor};
  }
`