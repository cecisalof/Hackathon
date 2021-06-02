import React from 'react'
const Meet = ({meet}) =>{
    const {name, time, phone, id}= meet;
    const createAt = (meet.date.seconds);
    console.log(createAt)
    const fecha= new Date(createAt*1000);
    console.log(fecha)
    return (
        <div>
            
            <h3>Nombre del cliente: {name}</h3>
            <h3>Teléfono: {phone}</h3>
            <h3>{fecha.toString()}</h3>
            <h3>Hora de la cita: {time}</h3>
            <h3>Folio de la cita: {id}</h3>
        </div>
    )
}
export default Meet;