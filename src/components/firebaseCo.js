import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCmxdZcTTUMRxliUszugKc-9_gu-EK2XyA",
  authDomain: "linkedin-clone-d8395.firebaseapp.com",
  projectId: "linkedin-clone-d8395",
  storageBucket: "linkedin-clone-d8395.appspot.com",
  messagingSenderId: "887476664342",
  appId: "1:887476664342:web:8c755ec59fd40e5d609d37"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
// const auth = firebase.auth();
// console.log(db)


export { db };