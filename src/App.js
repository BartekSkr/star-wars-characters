import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { DataState } from './components/context/DataState'
import { Characters } from './components/pages/characters/Characters'
import { PageNotFound } from './components/pages/404/404-page'
import { Favourites } from './components/pages/favourites/Favourites'
import { Provider } from 'react-redux'
import { store } from './components/store/store'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CharacterDetails } from './components/pages/characters/CharacterDetails';

function App() {
  return (
    <DataState>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Characters} />
              <Route exact path='/favourites' component={Favourites} />
              <Route exact path='' component={CharacterDetails} />
              <Route component={PageNotFound}/>
            </Switch>
          </div>
        </Router>
          <ToastContainer
            position="bottom-center"
            hideProgressBar={true}
            pauseOnHover={false}
            draggable={false}
            autoClose={3000}
            transition={Zoom}
            limit={4}
            theme='dark'
          />
      </Provider>
    </DataState>
  );
}

export default App;
