import {React, useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {db} from './firebase.js';
import moment from 'moment';

import Block from './components/Block';
import Register from './components/Register.jsx';
import Confirm from './components/Confirm.jsx';

import './App.css';
//import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';


function App() {
  //const [appoinment, setAppoinment] = useState([]);
//[{ 
//       name:'Cecilia',
//       phone:'Losada',
//       date: moment(),
//       time:'12:55'}]);

//   const handleSubmit= (e) => {
//         e.preventDefault()
//         gettingData()
//     }


//   const gettingData = (meet) => {
//     db.collection("meets").where('phone', '==', meet.phone)
//     .get()
//     .then(querySnapshot => {
//           const newAppoinments = [];
//           querySnapshot.forEach(doc => {
//             console.log(doc);
//               const appoinment = {
//                 name: doc.name,
//                 phone: doc.phone,
//                 date: moment(),
//                 time: doc.time,
//                   id: doc.id,
//                   ...doc.data()
//                 };
                
//                 newAppoinments.push(appoinment)
//                 //console.log(doc.id, ' => ', doc.data());
//                 console.log(newAppoinments);
//           });
//       setAppoinment(newAppoinments)
//     })
//     .catch(error => {
//       console.log(error)
//     });
// }

// useEffect(() => {
//   db.collection('meets').get()
//     .then(response => {
//       console.log(response)
//       const fetchedMeets = [];
//       response.docs.forEach(document => {
//         const meets = {
//           id: document.id,
//           ...document.data()
//         };
//         fetchedMeets.push(meets);
//         console.log(fetchedMeets)
//       });
//       setAppoinment(fetchedMeets);
//     })
//     .catch(error => {
//       console.log("La lista de citas no se ha leído correctamente");
//     });
// }, []);

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
          <Route path="/confirmation">
          <Confirm />
            {/* <Confirm appoinment={appoinment} setAppoinment={setAppoinment}/> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
