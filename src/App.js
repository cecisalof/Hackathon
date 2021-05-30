import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Block from './Block.jsx';
import Register from './Register.jsx';
// import GettingData from './GettingData'

import './App.css';
//import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route path="/" exact>
            <Block/>
          </Route>
          <Route path="/register">
            <p>Me voy a registrar</p>
            <Register/>
            {/* <GettingData /> */}
          </Route>
          <Route path="/meeting">
            <p>Ya me registré</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
