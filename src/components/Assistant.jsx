import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Meet from "./Meet";
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/styles';

import "./Assistant.css";

const useStyle = makeStyles((theme)=>({
  btnConfirm: {
      background: '#006FA9',
      color: 'white',
      top: '20px',
  }
}))
const Assistant = () => {
  const classes = useStyle()
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
      const createAt = new Date(obj.creationDate); // fecha
      const newDate = new Date(); // fecha y hora que ;
      if (list < createAt) {
        list.push(obj);
      }
    });
    setMeetList(list);
  };

  return (
    <div>
      {meetList.map((meet) => (
        <Meet
          key={meet.id}
          meet={meet}
          meetList={meetList}
          setMeetList={setMeetList}
        />
      ))}
      <div>
        <h2>Requisitos:</h2>
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <p>INE/IFE</p>
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <p>App instalada en tu celular</p>
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <p>Smartphone con sistema operativo iOS 10.0, Android 5.0 o superiores.</p>
      </div>
      <h2>Pase a la ventanilla 2</h2>
      <div id='buttonsAssistant'>
      <Button className={classes.btnConfirm} type='submit' variant='contained'>
            Confirmar
            </Button>
            <Button className={classes.btnConfirm} type='submit' variant='contained'>
            Volver a agendar
            </Button>
      </div>
    </div>
  );
};
export default Assistant;