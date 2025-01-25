import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC3W1Va7SMAECbc9HiwcDoH7-vf0wPWOHc",
  authDomain: "workosignin.firebaseapp.com",
  projectId: "workosignin",
  storageBucket: "workosignin.firebasestorage.app",
  messagingSenderId: "349460504362",
  appId: "1:349460504362:web:4dd996e62fd7d32fbb0853"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);