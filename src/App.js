import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Block from './components/Block.jsx';
import Register from './components/Register.jsx';
import Confirm from './components/Confirm.jsx';
import Calendars from './components/Calendar.jsx';
import HeaderCalendar from './components/HeaderCalendar.jsx';
import Dates from './components/Dates.jsx';
import Assistant from './components/Assistant.jsx'
import HeaderConfirm from './components/HeaderConfirm.jsx'
import FooterConfirm from './components/FooterConfirm.jsx'
import HeaderAssistant from './components/HeaderAssistant.jsx'

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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Register/>
            </MuiPickersUtilsProvider>  
          </Route>
          <Route path="/confirm">
            <HeaderConfirm/>
            <Confirm/>
            <FooterConfirm/>
          </Route>
          <Route path="/assistant">
          <HeaderAssistant/>
          <Assistant/>
          </Route>
          <Route path="/calendar">
            <HeaderCalendar/>
            <Calendars/>
          </Route>
          <Route path="/date">
          <Dates/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
