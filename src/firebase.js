import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyDtncMbuL0zS7A_oMqcgz5mn1h9E84rlQ4",
  authDomain: "twitter-app-d11f6.firebaseapp.com",
  projectId: "twitter-app-d11f6",
  storageBucket: "twitter-app-d11f6.appspot.com",
  messagingSenderId: "975995405040",
  appId: "1:975995405040:web:ac29c8187373ad9f823835",
  measurementId: "G-ELSMZZNRQW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;