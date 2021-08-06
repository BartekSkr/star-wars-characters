import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { DataState } from './components/context/DataState'
import { Characters } from './components/pages/characters/Characters';

function App() {
  return (
    <DataState>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Characters} />
          </Switch>
        </div>
      </Router>
    </DataState>
  );
}

export default App;
