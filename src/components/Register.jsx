import React, {useState} from 'react';
import { db } from '../firebase';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import 'date-fns';
import {
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Header from '../assets/encabezadoCliente.png'
import './Register.css';

import Maps from './Maps';

const useStyle = makeStyles((theme)=>({
    btnConfirm: {
        background: '#006FA9',
        color: 'white',
        position: 'absolute',
        width: '195px',
        height: '41px',
        left: '95px',
        top: '580px'
    },
    inputs: {
        borderRadius: '20px',
        width: '340px',
        height: '52px',
        top: '142px',
        margin: '0 0 14px 0px',
    },
    suc: {
        top: '175px',
        width: '340px',
        height: '52px',
        margin: '5px 0px 0px 0px',
        background: '#F8F5F5',
    },
    date: {
        top: '215px',
        width: '340px',
        height: '54px',
        background: '#F8F5F5',
        color: '#006FA9'
        
    },
    hour: {
        top: '250px',
        width: '340px',
        height: '52px',
        margin: '5px 0px 0px 0px',
        color: '#006FA9',
        background: '#F8F5F5',
    },

}))


const Register = () => {
    // const [appoinment, setAppoinment] = useState([]);
    const [hour, setHour] = useState('');
    const [ inputData, setInputData ] = useState({
        name:'',
        phone:'',
        date: moment(),
        time:'',
        creationDate: Date.now()
    });//inputs
    const classes = useStyle()
    const history = useHistory();

    const handleDateChange = (date) => {
        setInputData({...inputData, date: date})
    };
    
    const formatData = (id,value)=>{
        // eslint-disable-next-line no-new-object
        return new Object({...inputData, [id]:value});
    }

    const goConfirmation = () => {
     history.push('/confirmation');
    };

    const handleInput = (e) => {
        const { id, value } = e.target;
        setInputData(formatData(id,value));
    }

    const handleChange = (e)=>{
        const { value } = e.target;
        setHour(value);
        setInputData(formatData('time', value));
    }

    const handleSubmit= (e) => {
        e.preventDefault()
        postDate()
        goConfirmation()
    }

    const postDate=()=>{
        if (inputData.phone === '' || inputData.name === ''){
            console.log('Algunos campos requeridos están vacíos');
        } else {
            db.collection('meets').add(inputData)
                .then((docRef) => {
                    console.log('Appoinment id: =>', docRef.id);
                    // gettingData()
              })
        }
      }
    
    // const gettingData = () => {
    //       db.collection("meets").where('phone', '==', inputData.phone)
    //       .get()
    //       .then(querySnapshot => {
    //             const newAppoinments = [];
    //             querySnapshot.forEach(doc => {
    //                 const appoinment = {
    //                     id: doc.id,
    //                     ...doc.data()
    //                   };
    //                   newAppoinments.push(appoinment)
    //                   //console.log(doc.id, ' => ', doc.data());
    //                   console.log(newAppoinments);
    //             });
    //         setAppoinment(newAppoinments)
    //         goConfirmation()
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       });
    //   }


    //Formato de fecha para display moment(date).format(dddd, dd mm YYYY)
    // Antes de hacer el display de la fecha, poner en useEffect(() => {moment.locale('es')}, []) para el idioma, creo xD
    return (  
        <div className='container'>
            <img className='header' src={Header} alt=''/> 
            <form>
            <TextField className={classes.inputs} id='name' label='Ingresa tu nombre'  variant='outlined' value={inputData.name} onChange ={handleInput} />
            <TextField className={classes.inputs} id='phone' label='Ingresa tu número telefónico' variant='outlined' type='number' value={inputData.phone} onChange={handleInput}/>
            <p id='suc'>Elige tu sucursal</p>
            <Select className={classes.suc} variant='outlined'><Maps/></Select>

            <p id='dateText'>Elige tu fecha</p>
            <KeyboardDatePicker className={classes.date} inputVariant='outlined'
                id='date'
                format='dd/MM/yyyy'
                value={inputData.date}
                onChange={handleDateChange}
            />
            <p id='hr'>Elige tu hora</p>
        <Select variant='outlined'
        className={classes.hour}
           value={hour}
           onChange={handleChange}
        >
          <MenuItem value={9.30}>9:30</MenuItem>
          <MenuItem value={11}>11:00</MenuItem>
          <MenuItem value={14.30}>14:30</MenuItem>
        </Select>
            <Button className={classes.btnConfirm} type='submit' variant='contained' onClick={handleSubmit}>
            Confirmar
            </Button>
            </form>
        </div>
    );
}
 
export default Register;

