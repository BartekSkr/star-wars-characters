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

const Navbar = ({ title, isDarkTheme, page }: NavbarProps) => {
  // const themeTooltipText = isDarkTheme
  //   ? 'Switch to light theme'
  //   : 'Switch to dark theme';

  const dispatch = useDispatch();

  const navbarTabs = [
    { name: 'Characters', href: `/characters/#${page}` },
    { name: 'Favorites', href: '/favorites' },
  ];

  // useEffect(() => {
  //   localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  //   isDarkTheme
  //     ? (document.body.style.backgroundColor = 'black')
  //     : (document.body.style.backgroundColor = 'white');
  // }, [isDarkTheme]);

  return (
    <nav className="block text-center items-center pt-4 pb-4 px-8 border-b-4 border-default-color">
      <h1 className="text-default-color text-2rem font-bold mb-2">{title}</h1>
      {/* <button
        className="theme-button"
        aria-label={themeTooltipText}
        onClick={() => dispatch(darkTheme(!isDarkTheme))}
      >
        <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
      </button> */}
      <ul className="list-none flex justify-center">
        {navbarTabs.map((tab) => (
          <li key={tab.name} className="text-larger w-32 mx-4 duration-0.2">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? 'border-b-3 text-default-color'
                  : 'inline-block text-white hover:text-default-color hover:duration-0.2'
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
