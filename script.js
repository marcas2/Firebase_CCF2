import {initializeApp}  from 'https://www.gstatic.com/firebasejs/8.9.1/firebase-firestore.js';
import {getFirestore} from '../node_modules/firebase/firebase-firestore-lite.js';

const firebaseConfig = {
    apiKey: "AIzaSyB6ArED3MSdt73CnXFEyRL-jucARHqYUtA",
    authDomain: "proyecto-a9229.firebaseapp.com",
    projectId: "proyecto-a9229",
    storageBucket: "proyecto-a9229.appspot.com",
    messagingSenderId: "1041774045961",
    appId: "1:1041774045961:web:4f490c61cac20628a381d8"
  };

  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);

  // Ahora 'firebase' contiene todos los módulos que importaste
  console.log(firebase);