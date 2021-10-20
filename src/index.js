import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { DataState } from './components/context/DataState'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <DataState>
      <App />
    </DataState>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
