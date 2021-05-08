import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './pages/Login';
import PlayerPage from './pages/PlayerPage';
import PlayerHomePage from './pages/PlayerHomePage';
import ScoutHomePage from './pages/ScoutHomePage';
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Route path='/' exact component={App} />
    <Route path='/kickoff'  component={Login} />
    <Route path='/players'  component={PlayerPage} />
    <Route path='/player-home' component={PlayerHomePage}/>
    <Route path='/scout-home' component={ScoutHomePage}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
