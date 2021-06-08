import { React, useState, useEffect } from "react";
import { db } from "../firebase.js";
import "./Confirm.css";
import MeetCard from "./MeetCard";
import Dates from '../assets/ticket.png';
import { useHistory } from 'react-router-dom';


const Confirm = () => {
  const history = useHistory();

  const goPage = () => {
    history.push("/assistant");
  };

  const [meetList, setMeetList] = useState([]);
  useEffect(() => {
    getMeets();
  }, []);
  const getMeets = async () => {
    let obj;
    let list = [];
    const querySnapshot = await db.collection("meets").get();
    querySnapshot.forEach((doc) => {
      obj = doc.data();
      obj.id = doc.id;
      const createAt = new Date(obj.creationDate); // fecha y hora de la creación de publicación
      console.log("createAt => ", createAt);
      if (list < createAt) {
        list.push(obj);
      }
    });
    setMeetList(list);
  };
  return (
    <>
      
      <div id='datos'>
        {meetList.map((meet) => (
          <MeetCard
            key={meet.id}
            meet={meet}
            meetList={meetList}
            setMeetList={setMeetList}
          />
        ))}
      </div>
      <img id='imageDate' src={Dates} alt=''/>
      <button className='invisibleTres' onClick={goPage}/>
    </>
  );
};
export default Confirm;