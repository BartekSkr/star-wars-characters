import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from './app/store/store';
import Navbar from './app/components/ui/common/Navbar/Navbar';
import Characters from './app/components/pages/Characters/Characters';
import PageNotFound from './app/components/pages/404/404-page';
import Favorites from './app/components/pages/Favorites/Favorites';
import CharacterDetails from './app/components/pages/CharacterDetails/CharacterDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AppProps {
  theme?: boolean;
}

const App: React.FC<AppProps> = ({ theme }) => {
  return (
    <div className='container' data-theme={theme === true ? 'dark' : 'white'}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/characters' />} />
          <Route path='/characters' element={<Characters />}>
            <Route path=':id' element={<Characters />} />
          </Route>
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/details/:id' element={<CharacterDetails />} />
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
        theme={theme === true ? 'dark' : 'light'}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.isDarkTheme,
});

export default connect(mapStateToProps, null)(App);
