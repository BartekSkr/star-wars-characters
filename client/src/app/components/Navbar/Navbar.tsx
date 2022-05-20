import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { darkTheme } from '../../services/Redux/actions';
import { RootState } from '../../services/Redux/store';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './Navbar.scss';
import { NavbarProps } from './types';

const Navbar: React.FC<NavbarProps> = ({ title, isDarkTheme }) => {
  const themeTooltipText =
    isDarkTheme === true ? 'Switch to light theme' : 'Switch to dark theme';

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
    isDarkTheme === true
      ? (document.body.style.backgroundColor = 'black')
      : (document.body.style.backgroundColor = 'white');
  }, [isDarkTheme]);

  return (
    <nav className='navbar'>
      <h1>{title}</h1>
      <button
        className='theme-button'
        aria-label={themeTooltipText}
        onClick={() => dispatch(darkTheme(!isDarkTheme))}
      >
        <FontAwesomeIcon icon={isDarkTheme === true ? faSun : faMoon} />
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

const mapStateToProps = (state: RootState) => ({
  isDarkTheme: state.isDarkTheme,
});

export default connect(mapStateToProps, null)(Navbar);
