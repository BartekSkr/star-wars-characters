import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: 'white',
  fontColor: 'black',
  accentColor: 'black'
}

export const darkTheme = {
  body: 'black',
  fontColor: 'white',
  accentColor: 'yellow'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.fontColor};
  }

  .navbar {
    border-bottom: 5px solid ${({ theme }) => theme.accentColor};
  }

  .navbar h1 {
    color: ${({ theme }) => theme.accentColor}
  }

  .navbar-link {
    color: ${({ theme }) => theme.fontColor}
  }

  .navbar-link-active {
    color: ${({ theme }) => theme.accentColor};
    border-bottom: 3px solid ${({ theme }) => theme.accentColor};
    text-decoration: none
  }

  .navbar-li:hover a {
    color: ${({ theme }) => theme.accentColor};
  }

  .theme-button {
    color: ${({ theme }) => theme.fontColor};
  }

  .theme-button:hover {
    color: ${({ theme }) => theme.accentColor};
  }

  .spinner {
    color: ${({ theme }) => theme.accentColor};
  }

  .spinner div::after {
    background: ${({ theme }) => theme.accentColor};
  }

  .not-found-container > h2 {
    color: ${({ theme }) => theme.accentColor};
  }

  .character,
  .character-details {
    border: 3px solid ${({ theme }) => theme.accentColor};
  }

  .initial-info-icon,
  .initial-info span {
    color ${({ theme }) => theme.accentColor};
  }

  .character-info-header {
    color: ${({ theme }) => theme.accentColor};
  }

  .add-button,
  .delete-button,
  .details-button,
  .delete-list-button {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.accentColor};
  }

  .search-input {
    border: 3px solid ${({ theme }) => theme.fontColor}
  }

  .search-error {
    color: ${({ theme }) => theme.accentColor};
  }

  .search-button {
    color: ${({ theme }) => theme.accentColor};
  }

  .empty-list {
    color: ${({ theme }) => theme.accentColor};
  }

  .pagination-link {
    color: ${({ theme }) => theme.fontColor};
  }

  .pagination-link-active {
    border-bottom 3px solid ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.accentColor};
  }

  .pagination-li:hover pagination-link {
    color: ${({ theme }) => theme.accentColor};
  }
`