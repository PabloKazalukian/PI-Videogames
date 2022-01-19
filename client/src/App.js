import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Videogame from './components/Videogame/Videogame.jsx';
import VideogameDetail from './components/VideogameDetail/VideogameDetail.jsx';
import VideogameForm from './components/VideogameForm/VideogameForm.jsx';
import Error404 from './components/Error404/Error404.jsx';
import { Route,Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <div className='apps'>
        <Route path={'/Api'} component={ NavBar}/>
        <Switch>
          <Route exact path={'/'} component={LandingPage}/>
          <Route exact path={'/Api/search/:id'} component={VideogameDetail}/>
          <Route exact path={'/Api'} component={Videogame}/>
          <Route exact path={'/Api/Form'} component={VideogameForm}/>
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;  