import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const Navbar = ({ title }) => {
  return (
    <nav className='navbar'>
      <h1>{title}</h1>
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
  title: 'STAR WARS CHARACTERS'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}
