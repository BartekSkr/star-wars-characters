import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { DataState } from './components/context/DataState'

function App() {
  return (
    <DataState>
      <Router>
        <Navbar />
        <div className='container'>

        </div>
      </Router>
    </DataState>
  );
}

export default App;
