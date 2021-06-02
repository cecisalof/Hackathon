import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../assets/Header.png';

import './Block.css';

const HeaderConfirm = () => {
    const history = useHistory();

    const goPage = () => {
      history.push("/assistant");
    };
    return ( 
        <div>
            <button className='invisible' onClick={goPage}/>
            {/* <button id='btnBlue' onClick={goPage}>Agenda una cita en sucursal para obtenerlo</button> */}
              <img src={Header} alt=''/>     
        </div>
     );
}
 
export default HeaderConfirm;