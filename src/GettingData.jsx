// import React, { useState, useEffect } from 'react';

// import { db } from './firebase'

// const GettingData = (db, set) => {

//     const fetchedMeets = [];
  
//     useEffect(() => {
//         db.collection('meets').get()
//           .then(response => {
//             const fetchedMeets = [];
//             response.docs.forEach(document => {
//               const meet = {
//                 name: document.name,
//                 email: document.email,
//                 date: document.date,
//                 time: document.time,
//                 ...document.data()
//               };
//               fetchedMeets.push(meet);
//             });
//             setMeet(fetchedMeets);
//           })
//           .catch(error => {
//             setError(error);
//           });
//       }, []);

      
//         return (
//           <div>
//             {error ? (
//               <p>Ops, there is an error</p>
//             ) : null }
//             <ul>
//               {fetchedMeets.map(meet => (
//                 <li key={meet.id}>{meet.name}</li>
//               ))}
//             </ul>
//           </div>
//         );
//     }
      
// export default GettingData;