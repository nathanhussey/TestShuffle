/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../components/PreLogin/Homepage";
// eslint-disable-next-line import/named
import { SignUp } from "../components/PreLogin/Signup";
// eslint-disable-next-line import/named
import { LogIn } from "../components/PreLogin/LogIn";
import Dashboard from "./Dashboard";
import TestCard from "./TestCard";
import UpdateTestCard from "../components/UpdateTestCard";
import DemoTest from "../components/PreLogin/DemoTest";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/testcard" component={TestCard} />
        <Route path="/testcard/:id" component={UpdateTestCard} />
        <Route path="/demotest" component={DemoTest} />
      </Switch>
    </div>
  </Router>
);

export default App;
