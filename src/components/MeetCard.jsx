import React from 'react';

const MeetCard=({meet})=> {
    console.log();
    const {name, time, phone, id}= meet;
    const createAt = (meet.date.seconds);
    console.log(createAt)
    const fecha= new Date(createAt*1000);
    console.log(fecha)
    return (
        <div>
            <p>Esta es tu cita</p>
            <p>Nombre del cliente: {name}</p>
            <p>Teléfono: {phone}</p>
            <p>{fecha.toString()}</p>
            <p>Hora de la cita: {time}</p>
            <p>Folio de la cita: {id}</p>
        </div>
    )
}
export default MeetCard;