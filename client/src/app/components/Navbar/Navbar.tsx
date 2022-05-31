import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { darkTheme } from '../../store/actions';
import { RootState } from '../../store/store';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './Navbar.scss';
import { NavbarProps } from './types';

const Navbar: React.FC<NavbarProps> = ({ title, isDarkTheme, page }) => {
  const themeTooltipText =
    isDarkTheme === true ? 'Switch to light theme' : 'Switch to dark theme';

  const dispatch = useDispatch();

  const navbarTabs = [
    { name: 'Characters', href: `/characters/#${page}` },
    { name: 'Favorites', href: '/favorites' },
  ];

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
        {navbarTabs.map((tab) => (
          <li key={tab.name} className='navbar-li'>
            <NavLink
              className={(navData) =>
                navData.isActive ? 'navbar-link-active' : 'navbar-link'
              }
              to={tab.href}
            >
              {tab.name}
            </NavLink>
          </li>
        ))}
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
  page: state.page,
});

export default connect(mapStateToProps, null)(Navbar);
