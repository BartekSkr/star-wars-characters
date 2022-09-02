import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { darkTheme } from '../../store/actions';
import { RootState } from '../../store/store';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { NavbarProps } from './types';

const Navbar = ({ title, isDarkTheme, page }: NavbarProps) => {
  const themeTooltipText = isDarkTheme
    ? 'Switch to light theme'
    : 'Switch to dark theme';

  const dispatch = useDispatch();

  const navbarTabs = [
    { name: 'Characters', href: `/characters/#${page}` },
    { name: 'Favorites', href: '/favorites' },
  ];

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
    isDarkTheme
      ? (document.body.style.backgroundColor = 'black')
      : (document.body.style.backgroundColor = 'white');
  }, [isDarkTheme]);

  return (
    <nav className="block text-center items-center py-4 px-8 border-b-4 border-default-color">
      <p className="text-default-color text-2rem font-bold mb-2">{title}</p>
      <button
        className="bg-none absolute top-theme-btn-top right-theme-btn-right border-none h-6 w-6 cursor-pointer opacity-60 transition-all duration-0.2 hover:opacity-100 hover:duration-0.2
        after:content-[attr(aria-label)] after:absolute after:max-w-max after:bg-tooltip-background after:rounded-sm after:py-2 after:px-5 after:left-tooltip-left after:top-tooltip-top after:my-0 after:mx-auto after:scale-0 after:hover:scale-100"
        aria-label={themeTooltipText}
        // onClick={() => dispatch(darkTheme(!isDarkTheme))}
        onClick={() => console.log('click')}
      >
        <FontAwesomeIcon
          icon={isDarkTheme ? faSun : faMoon}
          className=" hover:text-default-color"
        />
      </button>
      <ul className="list-none flex justify-center">
        {navbarTabs.map((tab) => (
          <li
            key={tab.name}
            className="text-larger h-8 w-32 mx-4 transition-all ease-in-out duration-0.2"
          >
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? 'inline-block transition-colors duration-0.2 text-default-color after:block after:scale-x-100 after:border-b-3 after:transition-transform after:duration-0.2'
                  : 'inline-block transition-colors duration-0.2 after:block after:border-b-3 after:scale-x-0 after:transition-transform after:duration-0.2 hover:text-default-color hover:duration-0.2 hover:transition-colors'
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
