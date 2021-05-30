import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBj_LJOB_VjyNC9ykO0msIQcyJcZh6JEYQ",
    authDomain: "hackathon-io-x.firebaseapp.com",
    projectId: "hackathon-io-x",
    storageBucket: "hackathon-io-x.appspot.com",
    messagingSenderId: "721742920723",
    appId: "1:721742920723:web:3fb53146e6b698112053e6"
  };


  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();