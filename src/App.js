import React from 'react';
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom'
import logo from './cinema.svg'
import MoviesList from './MoviesList'
import MovieDetail from './MovieDetail'
import './App.css'
const App = () => (
      <Router>
      <div className="App">
        <header className='App-header' alt='logo'>
          <div style={{display: 'flex', flexDirection: 'column' }}>
          <Link to='/'>
            <img src={logo} className='App-logo' alt='logo' style={{height: 70}} />
          </Link>
            <h2 style={{margin: '5px 0px 5px 0px'}}>Find A Film App</h2>
          </div>
        </header>
        <Switch>
        <Route exact path='/' component={MoviesList}/>
        <Route path='/:id' component={MovieDetail}/>
        </Switch>
      </div>
      </Router>
)

export default App;
