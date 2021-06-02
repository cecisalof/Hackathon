import React from 'react'
import './Confirm.css'

const Meet = ({meet}) =>{
    const {name, time, phone, id}= meet;
    const createAt = (meet.date.seconds);
    console.log(createAt)
    const fecha= new Date(createAt*1000);
    console.log(fecha)
    return (
        <div>
            <h3>Personas con cita</h3>
            <p className='ticket'>Nombre del cliente:</p><h4 className='imprimir'>{name}</h4>
            <p className='ticket'>Teléfono: </p><h4 className='imprimir'>{phone}</h4>
            <p className='ticket'>Fecha:</p><h4 className='imprimir'>{fecha.toString()}</h4>
            <p className='ticket'>Hora de la cita:</p><h4 className='imprimir'> {time}</h4>
            <p className='ticket'>Folio de la cita: </p><h4 className='imprimir'>{id}</h4>
        </div>
    )
}
export default Meet;
