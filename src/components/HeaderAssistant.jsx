import React from 'react';
import { useHistory } from 'react-router-dom';

import HeaderAssistant from '../assets/HeaderAssistant.png';

import './Block.css';

const HeaderAssitant = () => {
    const history = useHistory();

    const goPage = () => {
      history.push("/calendar");
    };
    return ( 
        <div>
            <button className='invisible' onClick={goPage}/>
            {/* <button id='btnBlue' onClick={goPage}>Agenda una cita en sucursal para obtenerlo</button> */}
              <img src={HeaderAssistant} alt=''/>     
        </div>
     );
}
 
export default HeaderAssitant;