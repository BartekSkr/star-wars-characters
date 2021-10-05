import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'
import DataContext from '../context/dataContext'
import { useContext } from 'react'

export const Navbar = ({ title }) => {
  const dataContext = useContext(DataContext)
  const { myTheme, setMyTheme } = dataContext

  return (
    <nav className='navbar'>
      <h1>{title}</h1>
      <button
        className='theme-button'
        // data-tip='Change theme'
        data-tip={myTheme === 'light' ? 'Change to dark theme' : 'Change to light theme'}
        onClick={() => myTheme === 'light' ? setMyTheme('dark') : setMyTheme('light')}
      >
        <FontAwesomeIcon icon={myTheme === 'light' ? faMoon : faSun} />
      </button>
      <ul>
        <li className='navbar-li'>
          <NavLink
            className='navbar-link'
            activeClassName='navbar-link-active'
            exact to='/characters'
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
      <ReactTooltip place='left' effect='solid' type='info' />
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'STAR WARS CHARACTERS'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}
