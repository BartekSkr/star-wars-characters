import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { DataState } from './components/context/DataState'
import { store } from './components/store/store'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DataState>
        <App />
      </DataState>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
