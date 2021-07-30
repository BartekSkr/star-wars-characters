import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const Navbar = ({ title }) => {
  return (
    <nav className='navbar'>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to='/'>Search</Link>
        </li>
        <li>
          <Link to='favourites'>Favourites</Link>
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
