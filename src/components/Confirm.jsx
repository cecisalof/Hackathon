import React from 'react';
import { db } from '../firebase';

import Dates from '../assets/date.png';

import './Confirm.css';
import Register from './Register.jsx';

const Confirm = (inputData, setInputData) => {


    return ( 
        <div className='container'>
              <img src={Dates} alt=''/> 
              
        </div>
     );
}
 
export default Confirm;