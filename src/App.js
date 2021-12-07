import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import Characters from './components/pages/characters/Characters'
import { PageNotFound } from './components/pages/404/404-page'
import Favourites from './components/pages/favourites/Favourites'
import { Provider } from 'react-redux'
import { store } from './components/store/store'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CharacterDetails from './components/pages/characters/CharacterDetails'
import { ThemeProvider } from 'styled-components'
import { darkTheme, GlobalStyles, lightTheme } from './components/theme/themes'
import { useContext } from 'react'
import DataContext from './components/context/dataContext'

function App() {
  const dataContext = useContext(DataContext)
  const { myTheme } = dataContext

  return (
    <Provider store={store}>
      <ThemeProvider theme={myTheme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
          <Router>
            <Navbar />
            <div className='container'>
              <Routes>
                <Route path='/' element={<Navigate to='/characters' />} />
                <Route path='/characters' element={<Characters />} />
                <Route path='/favourites' element={<Favourites />} />
                <Route path='/details' element={<CharacterDetails />} />
                <Route path='*'  element={<PageNotFound />} />
              </Routes>
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
              theme={myTheme === 'light' ? 'light' : 'dark'}
            />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
