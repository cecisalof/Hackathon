import React, { useState} from 'react';

import { db } from './firebase'


const initialInputs = {
    name:'',
    email:'',
    date:'',
    time:'',
    phone: ''
}

const Register = () => {

    const [ inputData, setInputData ] = useState(initialInputs);
    // const [ meet, setMeet] = useState([]);
    // const [ error, setError] = useState();

    const handleChange = (e) => {
        const { id, value } = e.target;
        const newObject = ({...inputData, [id]: value});
        // console.log(newObject);
        setInputData(newObject);
    }

    const handleSubmit= (e) => {
        e.preventDefault()
        db.collection('meets').add(inputData)
        .then((docRef) => {
            console.log('id:', docRef.id)
            
        }).catch((error) => {
            console.error('Error adding document:', error);
        });
    }
    const gettingData = () => {
      // e.preventDefault()
        db.collection("meets").where("phone", "==", inputData.phone)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }



    // useEffect(() => {
    //  // 
    //   }, []);

    //   const printingData = (id) => {
    //       db.collection('meets').get()
    //       .then(response => {
    //         const fetchedMeets = [];
    //         response.docs.forEach(document => {
    //           const meet = {
    //             name: document.name,
    //             email: document.email,
    //             date: document.date,
    //             time: document.time,
    //             ...document.data()
    //           };
    //           fetchedMeets.push(meet);
    //           console.log(fetchedMeets)
    //         });
    //     //     setMeet(fetchedMeets);
    //     //   })
    //     //   .catch(error => {
    //     //     setError(error);
    //       });
    //     // fetchedMeets.map(meet => (
    //     //     <li 
    //     //     key={meet.id}>
    //     //         {meet.name}</li>
    //     //   ))
    //     };
      

    //BRINGING meet data to the console:
        // db.collection('meets').get()
        // .then(response => {
        // response.docs.forEach(document => {
        // console.log(document.data());
        // });
        // })
        // .catch(error => {
        // console.log(error);
        // });


    //   db.collection("cities").where("capital", "==", true)
    // .get()
    // .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch((error) => {
    //     console.log("Error getting documents: ", error);
    // });
    
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Ingresa tu nombre' id='name' value={inputData.name} onChange = {handleChange}/>
            <input type='email' placeholder='Ingresa tu correo' id='email' value={inputData.email} onChange = {handleChange}/>
            <input type='number' placeholder='Ingresa tu teléfono' id='phone'value={inputData.phone} onChange={handleChange}/>
            <p>Elige tu sucursal</p>
            <p>Elige tu fecha</p>
            <input type='date' id='date' value={inputData.date} onChange = {handleChange}/>
            <p>Elige tu hora</p>
            <input type='time' id='time' value={inputData.time} onChange = {handleChange}/>
            <input type='submit' value='Confirmar' onClick={gettingData}></input>
            </form>
            {/* <div>
            {error ? (
              <p>Ops, there is an error</p>
            ) : null }
            <ul>
              {fetchedMeets.map(meet => (
                <li key={meet.id}>{meet.name}</li>
              ))}
            </ul>
          </div> */}

        </div>
        
    );
}

export default Register;