import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage'
import { Route,Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Route path={'/Api'} component={ NavBar}/>
      <Switch>
        <Route exact path={'/'} component={LandingPage}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;  