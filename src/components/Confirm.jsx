/* eslint-disable array-callback-return */
import {React, useState, useEffect }from 'react';
import {db} from '../firebase.js';
import Dates from '../assets/date.png';
import moment from 'moment';


import './Confirm.css';
import MeetCard from './MeetCard';

const Confirm = () => {
    const [meetList, setMeetList] = useState([]);
    //const [meets, setMeets] = useState([]);
    //console.log(appoinment);
    useEffect(() => {
        getMeets();
      }, []);

    const getMeets = async () => {
        let obj;
        let list = [];
        const querySnapshot = await db.collection('meets')
        .get();
        querySnapshot.forEach((doc) => {
            // console.log(doc);
          obj = doc.data();
          //console.log(obj)
          obj.id = doc.id;
        //   console.log("Lista de fechas de creación ", obj.creationDate);
        //   const creationDateArray = [obj.creationDate];
        //   console.log("array",creationDateArray);

          const createAt = new Date((obj.creationDate)); // fecha y hora de la creación de publicación
        //   console.log("createAt => ", createAt);
            const newDate = new Date(); // fecha y hora que corre actualmente
            // console.log(" new Date =>", newDate);

          if( list < createAt){
            list.push(obj);
          }
         console.log("LIST", list)
          
        });
        setMeetList(list);
      };


    return(
        <>
        <div className='container'>
        {meetList.map((meet) => (
        <MeetCard
          key={meet.id}
          meet={meet}
          meetList={meetList}
          setMeetList={setMeetList}
        />
      ))}
                <img src={Dates} alt=''/>      
        </div>
        </>
     );
}
 
export default Confirm;