import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import DataContext from '../context/dataContext'
import { useContext } from 'react'
import {themeInitialState} from '../reducers/themeReducer'
import { setDarkTheme, setLightTheme } from '../actions/themeActions'
import { connect, useDispatch } from 'react-redux'

export const Navbar = ({ title }) => {
// export const Navbar2 = ({ title }) => {
  const dataContext = useContext(DataContext)
  const { myTheme, setMyTheme } = dataContext
  const dispatch = useDispatch()

  // const themeTooltipText = myTheme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'
  const themeTooltipText = themeInitialState.activeTheme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'

  return (
    <nav className='navbar'>
      <h1>{title}</h1>
      <button
        className='theme-button'
        aria-label={themeTooltipText}
        // onClick={() => myTheme === 'light' ? setMyTheme('dark') : setMyTheme('light')}
        onClick={() => {
          themeInitialState.activeTheme === 'light' ? dispatch(setDarkTheme()) : dispatch(setLightTheme())
          console.log(themeInitialState.activeTheme)
        }}
      >
        {/* <FontAwesomeIcon icon={myTheme === 'light' ? faMoon : faSun} /> */}
        <FontAwesomeIcon icon={themeInitialState.activeTheme === 'light' ? faMoon : faSun} />
      </button>
      <ul>
        <li className='navbar-li'>
          <NavLink
            className='navbar-link'
            activeClassName='navbar-link-active'
            exact to='/'
          >
            Characters
          </NavLink>
        </li>
        <li className='navbar-li'>
          <NavLink
            className='navbar-link'
            activeClassName='navbar-link-active'
            exact to='/favourites'
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
// Navbar2.defaultProps = {
  title: 'STAR WARS CHARACTERS'
}

Navbar.propTypes = {
// Navbar2.propTypes = {
  title: PropTypes.string.isRequired,
}

// export const Navbar = connect((state) => ({ activeTheme: state.activeTheme }), {})(Navbar2)
