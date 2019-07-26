/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
// eslint-disable-next-line import/named
import { SignUp } from "../components/Signup";
// eslint-disable-next-line import/named
import { LogIn } from "../components/LogIn";
import Dashboard from "./Dashboard";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

export default App;
