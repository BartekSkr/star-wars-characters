import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { RootState } from './app/store/store';
import PropTypes from 'prop-types';
import PageNotFound from './app/components/pages/404/404-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './app/components/Navbar/Navbar';
import Characters from './app/components/pages/Characters/Characters';
import CharactersDetails from './app/components/CharacterDetails/CharactersDetails';
import Favorites from './app/components/pages/Favorites/Favorites';
import { Home } from './app/components/pages/Home/Home';
interface AppProps {
  isDarkTheme?: boolean;
  page?: string;
  url?: string;
  isAllCharactersList?: boolean;
}

const App: React.FC<AppProps> = ({
  isDarkTheme,
  page,
  url,
  isAllCharactersList,
}) => {
  return (
    <div
      className='container'
      data-theme={isDarkTheme === true ? 'dark' : 'white'}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <Home page={page!} isAllCharactersList={isAllCharactersList!} />
            }
          />
          <Route path='/characters' element={<Characters page={page!} />} />
          <Route
            path='/details/:id'
            element={<CharactersDetails url={url!} />}
          />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
      <ToastContainer
        position='bottom-center'
        hideProgressBar={true}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
        autoClose={3000}
        limit={4}
        theme={isDarkTheme === true ? 'dark' : 'light'}
      />
    </div>
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
  url: state.url,
  isAllCharactersList: state.isAllCharacters,
});

export default connect(mapStateToProps, null)(App);
