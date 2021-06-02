import React from 'react';
import { useHistory } from 'react-router-dom';

import HeaderDates from '../assets/HeaderCalendar.png';

import './HeaderCalendar.css';

const HeaderCalendar = () => {
    const history = useHistory();

    const goPage = () => {
      history.push("/date");
    };
    return ( 
        <div>
             <button className='invisible2' onClick={goPage}/>  
              <img id='headerCalendar'src={HeaderDates} alt=''/>   
        </div>
     );
}
 
export default HeaderCalendar;