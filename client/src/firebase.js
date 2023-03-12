import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD7AhI7t2r5I1pUHqaAswbYa3hh3swTK8",
  authDomain: "loc-sorteddd-3c8a1.firebaseapp.com",
  projectId: "loc-sorteddd-3c8a1",
  storageBucket: "loc-sorteddd-3c8a1.appspot.com",
  messagingSenderId: "324455134349",
  appId: "1:324455134349:web:c30bda852e8681943b9ec4",
  measurementId: "G-S4JSG818ES"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = getAuth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebaseApp, auth, db, projectStorage, projectFirestore, timestamp };

