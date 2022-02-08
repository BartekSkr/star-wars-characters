import React, { useEffect } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setTheme } from '../../../../actions/themeActions';

export const Navbar = ({ title, theme, changeTheme }) => {
  const themeTooltipText =
    theme.isDarkTheme === true
      ? 'Switch to light theme'
      : 'Switch to dark theme';

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(theme.isDarkTheme));
    theme.isDarkTheme === true
      ? (document.body.style.backgroundColor = 'black')
      : (document.body.style.backgroundColor = 'white');
  }, [theme]);

  return (
    <nav className='navbar'>
      <h1>{title}</h1>
      <button
        className='theme-button'
        aria-label={themeTooltipText}
        onClick={() => {
          changeTheme();
          theme.isDarkTheme === true
            ? (document.body.style.backgroundColor = 'black')
            : (document.body.style.backgroundColor = 'white');
        }}
      >
        <FontAwesomeIcon icon={theme.isDarkTheme === true ? faSun : faMoon} />
      </button>
      <ul>
        <li className='navbar-li'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'navbar-link-active' : 'navbar-link'
            }
            to='/characters'
          >
            Characters
          </NavLink>
        </li>
        <li className='navbar-li'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'navbar-link-active' : 'navbar-link'
            }
            to='/favorites'
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'STAR WARS CHARACTERS',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: () => dispatch(setTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
