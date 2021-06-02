import {React, useState} from 'react'

function MeetCard({meet}) {
    console.log(meet);
    const {name, date, time, phone, creationDate, id}= meet;
    return (
        <div>
            <p>MEET CARD</p>
            <p>Nombre del cliente: {name}</p>
            <p>Teléfono: {phone}</p>
            {/* <p>{date}</p> */}
            <p>Hora de la cita: {time}</p>
            <p>{creationDate}</p>
            <p>Folio de la cita: {id}</p>
            
        </div>
    )
}

export default MeetCard
