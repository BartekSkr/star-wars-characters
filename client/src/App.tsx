import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { RootState } from './app/store/store';
import PageNotFound from './app/pages/404/404-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app/styles/App.scss';
import Navbar from './app/components/Navbar/Navbar';
import Characters from './app/pages/Characters/Characters';
import CharactersDetails from './app/components/CharacterDetails/CharactersDetails';
import Favorites from './app/pages/Favorites/Favorites';
import { Home } from './app/pages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
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
      className="container"
      data-theme={isDarkTheme === true ? 'dark' : 'white'}
    >
      <Router>
        <Navbar />
        <Routes>
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
      </Router>
      <ToastContainer
        position="bottom-center"
        hideProgressBar={false}
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

const mapStateToProps = (state: RootState) => ({
  isDarkTheme: state.isDarkTheme,
  page: state.page,
  url: state.url,
  isAllCharactersList: state.isAllCharacters,
});

export default connect(mapStateToProps, null)(App);
