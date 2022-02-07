import './App.scss'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../src/app/components/ui/common/Navbar/Navbar'
import Characters from './app/components/pages/Characters/Characters'
import PageNotFound from './app/components/pages/404/404-page'
import Favourites from './app/components/pages/Favourites/Favourites'
import { connect } from 'react-redux'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CharacterDetails from './app/components/pages/CharacterDetails/CharacterDetails'
import { ThemeProvider } from 'styled-components'
import { darkTheme, GlobalStyles, lightTheme } from './app/theme/themes'
import { Fragment } from 'react'

function App({ theme }) {
  return (
    <Fragment>
      <ThemeProvider theme={theme.isDarkTheme === true ? darkTheme : lightTheme}>
        <GlobalStyles />
          <Router>
            <Navbar />
            <div className='container'>
              <Routes>
                <Route path='/' element={<Navigate to='/characters' />} />
                <Route path='/characters' element={<Characters />} >
                  <Route path=':id' element={<Characters />} />
                </Route>
                <Route path='/favourites' element={<Favourites />} />
                <Route path='/details/:id' element={<CharacterDetails />} />
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
              theme={theme.isDarkTheme === true ? 'dark' : 'light'}
            />
      </ThemeProvider>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  theme: state.theme
})

export default connect(mapStateToProps, {})(App)
