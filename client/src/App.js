import React from 'react';
import './App.css';
// import NavBar from './components/NavBar/NavBar';
import { Route,Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      {/* <Route path={'/Api'} component={ NavBar}/> */}
      <Switch>
        <div className="App">
          <h1>Henry Videogames</h1>
        </div>
      </Switch>
    </React.Fragment>
  );
}

export default App;  