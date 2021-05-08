import React from 'react';
import { Route,BrowserRouter as Router } from 'react-router-dom';
import Profile from './Profile';
import Scouts from './Scouts';


function Routes(){

    return (
      <Router>
        
        <Route exact path='/' component={Profile}/>
        <Route path='/Scouts' component={Scouts}/>
       
        
       
       
      </Router>
    );
  
}

export default Routes;
