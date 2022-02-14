import { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../../../../actions/actions';
import PropTypes from 'prop-types';
import { AppDispatch, RootState } from '../../../../store/store';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  title?: string;
  theme?: boolean;
  changeTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ title, theme, changeTheme }) => {
  const themeTooltipText =
    theme === true ? 'Switch to light theme' : 'Switch to dark theme';

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(theme));
    theme === true
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
          theme === true
            ? (document.body.style.backgroundColor = 'black')
            : (document.body.style.backgroundColor = 'white');
        }}
      >
        <FontAwesomeIcon icon={theme === true ? faSun : faMoon} />
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
  theme: state.isDarkTheme,
});

const mapDispatchToProps = (dispatch: Dispatch<AppDispatch>) => ({
  changeTheme: () => dispatch(setTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
