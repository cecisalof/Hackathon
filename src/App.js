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
import CalendarList from './Components/Calendar.jsx';
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
          <Route path="/appoinmentList">
            <p>Lista de citas</p>
            <CalendarList />
          </Route>
          <Route path="/dashboard">
            <p>Panel de citas</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
