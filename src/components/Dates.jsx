import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderBanker from '../assets/banker.png';
import BarTime from '../assets/BarTime.png';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/styles';
import './Dates.css';

const useStyle = makeStyles((theme)=>({
  btnConfirm: {
      background: '#006FA9',
      color: 'white',
      top: '20px',
  }
}))

const HeaderDate = () => {
  const classes = useStyle()
    const history = useHistory();
    const goPage = () => {
      history.push("/register");
    };
    return (
        <div>
             <button className='invisible2' onClick={goPage}/>
              <img id='headerDate'src={HeaderBanker} alt=''/>
              <h1 id="horario">HORARIO DE LA CITA</h1>
              <img id='BarTime'src={BarTime} alt=''/>
              <h1 id="productos">SUGERENCIA DE PRODUCTO</h1>
            <div>
                <div id="bloque1">
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <p>Seguro de gastos medicos mayores</p>
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <p>Tarjeta de crédito</p>
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <p>Crédito de nomina</p>
                </div>
                <div id="bloque2">
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <p>Crédito personal</p>
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <p>Cuenta de débito</p>
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <p>Ahorro e inversiones</p>
                </div>
                <div id="buttonsArea">
                {/* <button id="buttonBlue">Pasar a cubiculo</button>
                <button id="buttonBlue">Fin de la cita</button> */}
            <Button className={classes.btnConfirm} type='submit' variant='contained'>
            Pasar a cubículo
            </Button>
            <Button className={classes.btnConfirm} type='submit' variant='contained'>
            Fin de la cita
            </Button>
                </div>
              </div>
        </div>
     );
}
export default HeaderDate;