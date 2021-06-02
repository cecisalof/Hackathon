/* eslint-disable array-callback-return */
import {React, useState, useEffect }from 'react';
import {db, Timestamp} from '../firebase.js';
import Dates from '../assets/date.png';


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
          console.log(obj.creationDate);
          const createAt = new Date((obj.creationDate))
        //   let timestamp = obj.creationDate.toDate();
        //   let timestamp = obj.creationDate;
        //   let myDate = new Date(timestamp*1000);
        //   let formatedTime=myDate.toJSON();
            console.log(createAt);

        // //   if(myDate === obj.creationDate){
            list.push(obj);
            console.log(list)
        //   }
          
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
            {/* <h3>Tu cita ha sido confirmada</h3> 
             {appoinment &&
             appoinment.map((meet) => {
                    console.log(meet,"holo");
                    <MeetCard
                        key={meet.id}
                        meet={meet}
                        setMeets={setMeets}
                        appoinment={appoinment}
                        setAppoinment={setAppoinment}
                         />
             })} */}
                             
                    
                 
               
             {/* {<MeetCard
             key={meet.id}
             meet={meet}
             setMeets={setMeets}
             appoinment={appoinment}
             setAppoinment={setAppoinment}
              />} */}
             
          
            
            
            
                <img src={Dates} alt=''/>      
        </div>
        </>
     );
}
 
export default Confirm;