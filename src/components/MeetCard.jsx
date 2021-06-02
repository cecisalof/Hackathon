import {React, useState} from 'react'

function MeetCard({meet}) {
    console.log(meet);

    // const createAt = new Date((meet.creationDate)); // fecha y hora de la creación de publicación
        //   console.log("createAt => ", createAt);
        //   console.log("Lista de string de", meet.creationDate);

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
