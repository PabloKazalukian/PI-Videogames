import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Videogame from './components/Videogame/Videogame.jsx';
import VideogameDetail from './components/VideogameDetail/VideogameDetail.jsx';
import { Route,Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Route path={'/Api'} component={ NavBar}/>
      <Switch>
        <Route exact path={'/'} component={LandingPage}/>
        <Route exact path={'/Api/search/:id'} component={VideogameDetail}/>
        <Route exact path={'/Api'} component={Videogame}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;  