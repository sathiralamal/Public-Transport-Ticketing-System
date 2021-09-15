import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";
import firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDeUwj2JMq2m_cn-u3jjFKEl-Yo3mh2Plo",
  authDomain: "ticketing-seystem.firebaseapp.com",
  databaseURL: "https://ticketing-seystem-default-rtdb.firebaseio.com",
  projectId: "ticketing-seystem",
  storageBucket: "ticketing-seystem.appspot.com",
  messagingSenderId: "813235961661",
  appId: "1:813235961661:web:3354c906bd54c1b0dc0f54",
  measurementId: "G-BR5FGV9TMV"

};

firebase.initializeApp(firebaseConfig);
const auth =firebase.auth();
const firestore=firebase.firestore();
const database=firebase.database();
const storage = firebase.storage();
const analytics = firebase.analytics();

export {auth,firebase,firestore,database,storage};

