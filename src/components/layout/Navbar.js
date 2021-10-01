import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'

export const Navbar = ({ title }) => {

  return (
    <nav className='navbar'>
      <h1>{title}</h1>
      <button
        className='theme-button'
        data-tip='Change theme'
        onClick={() => console.log('theme')}
      >
        <FontAwesomeIcon icon={faSun} />
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
