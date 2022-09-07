import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2LCbFHqLNUdFIpWnoLLDKwFeevqeAeRU",
  authDomain: "auth-firebase-fc412.firebaseapp.com",
  projectId: "auth-firebase-fc412",
  storageBucket: "auth-firebase-fc412.appspot.com",
  messagingSenderId: "408257076027",
  appId: "1:408257076027:web:6b4f53a2ba9f047997351e"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref()
export const auth = firebase.auth();