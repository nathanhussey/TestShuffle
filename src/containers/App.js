import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Homepage from "../components/homepage.js"
import SignUp from "../components/signup.js"
import LogIn from "../components/login.js"
import Dashboard from "../components/dashboard.js"




const App =()=> {
  return(
    <Router>  
      <div >
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/login' component={LogIn}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
      
      </div>
    </Router>
    )
    
}

export default App;
