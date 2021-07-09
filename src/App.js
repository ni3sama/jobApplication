import React from 'react';
import './App.css';
import LinkPage from "./linkPages"
import Recruiter from "./Recruiter/Recruiter"
import Applicant from "./Applicant/Applicant"


import {
  BrowserRouter as Router,
  Route,
  Switch, 
  // Link,
  // Redirect
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <div className="header">
      
        <div className="navbar navBar">
          <img className="logoImage" src="/images/logo.png" width="150px" alt="logo"/>
          <div className="navLeft">
          <a href="/">Home</a> 
          <a href="/recruiter">Recruiter</a> 
          <a href="/applicant">Applicant</a>   
          </div>
          
          <div className="navRight">
            <a href="www.google.com">About</a>
          </div>
        </div>
      </div>
      <div className="mainContainer">
      <Router>
        <Switch>
            <Route exact path="/" component={LinkPage} />
            <Route exact path="/recruiter" component={Recruiter} />
            <Route exact path="/applicant" component={Applicant} />
        </Switch>
    </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
