// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig1 = {
  apiKey: "AIzaSyC3W1Va7SMAECbc9HiwcDoH7-vf0wPWOHc",
  authDomain: "workosignin.firebaseapp.com",
  projectId: "workosignin",
  storageBucket: "workosignin.firebasestorage.app",
  messagingSenderId: "349460504362",
  appId: "1:349460504362:web:4dd996e62fd7d32fbb0853"
};

const firebaseConfig2 = {
  apiKey: "AIzaSyCLHK2o1pyTaWuVx50Cfo3-FMk9Np6kd0U",
  authDomain: "referraldata-e7986.firebaseapp.com",
  databaseURL: "https://referraldata-e7986-default-rtdb.firebaseio.com",
  projectId: "referraldata-e7986",
  storageBucket: "referraldata-e7986.firebasestorage.app",
  messagingSenderId: "597788030658",
  appId: "1:597788030658:web:e4903abf01120c1ccb6d5b"
};

const app1 = initializeApp(firebaseConfig1);
const app2 = initializeApp(firebaseConfig2, "app2");

export { app1, app2 }; // Export both app1 and app2
