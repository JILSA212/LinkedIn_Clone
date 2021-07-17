import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDH6evZJQuKCc5Q7CbB9lR35euIMxROfSI",
    authDomain: "linkedin-clone-9c489.firebaseapp.com",
    projectId: "linkedin-clone-9c489",
    storageBucket: "linkedin-clone-9c489.appspot.com",
    messagingSenderId: "35565203084",
    appId: "1:35565203084:web:4e2569d83b190c0c0cd5a9",
    measurementId: "G-0W452PYNF8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };