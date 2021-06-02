import React from 'react';
// import { useHistory } from 'react-router-dom';

import Footer from '../assets/Footer.png';
import Qr from '../assets/qr.png';

import './Block.css';

const FooterConfirm = () => {
    // const history = useHistory();

    // const goPage = () => {
    //   history.push("/register");
    // };
    return ( 
        <div>
            {/* <button id='btnBlue' onClick={goPage}>Agenda una cita en sucursal para obtenerlo</button> */}
            <img src={Qr} alt=''/> 
              <img src={Footer} alt=''/>     
        </div>
     );
}
 
export default FooterConfirm;