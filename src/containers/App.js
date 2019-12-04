/* eslint-disable react/jsx-filename-extension */
import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../components/PreLogin/Homepage";
// eslint-disable-next-line import/named

// eslint-disable-next-line import/named

const SignUp = lazy(() => import("../components/PreLogin/Signup"));
const LogIn = lazy(() => import("../components/PreLogin/LogIn"));
const Dashboard = lazy(() => import("./Dashboard"));
const TestCard = lazy(() => import("./TestCard"));
const UpdateTestCard = lazy(() => import("../components/UpdateTestCard"));
const DemoTest = lazy(() => import("../components/PreLogin/DemoTest"));

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Suspense fallback={<div>...Loading</div>}>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/testcard" component={TestCard} />
          <Route path="/testcard/:id" component={UpdateTestCard} />
          <Route path="/demotest" component={DemoTest} />
        </Suspense>
      </Switch>
    </div>
  </Router>
);

export default App;
