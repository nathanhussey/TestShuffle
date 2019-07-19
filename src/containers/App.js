import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from "../components/nav.js";
import Homepage from "../components/homepage.js"
import Signup from "../components/signup.js"
import Login from "../components/login.js"
import Dashboard from "../components/dashboard.js"




const App =()=> {
  return(
    <Router>  
      <div >
        <Nav/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
      
      </div>
    </Router>
    )
    
}

export default App;
