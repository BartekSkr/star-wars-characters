import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { RootState } from './app/store/store';
import PageNotFound from './app/pages/404/404-page';
import { Route, Routes, useLocation } from 'react-router-dom';
import './styles/global.css';
import Navbar from './app/components/Navbar/Navbar';
import Characters from './app/pages/Characters/Characters';
import CharactersDetails from './app/components/CharacterDetails/CharactersDetails';
import Favorites from './app/pages/Favorites/Favorites';
import { Home } from './app/pages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useMemo } from 'react';

interface AppProps {
  isDarkTheme?: boolean;
  page?: string;
  url?: string;
  isAllCharactersList?: boolean;
}

const App = ({ isDarkTheme, page, url, isAllCharactersList }: AppProps) => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
    isDarkTheme
      ? (document.body.style.backgroundColor = 'black')
      : (document.body.style.backgroundColor = 'white');
  }, [isDarkTheme]);

  const theme = useMemo(() => {
    return isDarkTheme ? 'theme-dark' : 'theme-light';
  }, [isDarkTheme]);

  return (
    <div className={`${theme}`}>
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Home page={page!} isAllCharactersList={isAllCharactersList!} />
            }
          />
          <Route path="/characters" element={<Characters page={page!} />} />
          <Route
            path="/details/:id"
            element={<CharactersDetails url={url!} />}
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer
          position="bottom-center"
          hideProgressBar={false}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          draggable={false}
          autoClose={3000}
          limit={4}
          theme={isDarkTheme ? 'dark' : 'light'}
        />
      </AnimatePresence>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isDarkTheme: state.isDarkTheme,
  page: state.page,
  url: state.url,
  isAllCharactersList: state.isAllCharacters,
});

export default connect(mapStateToProps, null)(App);
