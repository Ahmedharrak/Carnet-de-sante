// database/firebaseDb.js

import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDRjwTW8QEgByfYNhTakkFhAzqBc00_dSo",
    authDomain: "reactnativefirebase-17cc5.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-17cc5.firebaseio.com",
    projectId: "reactnativefirebase-17cc5",
    storageBucket: "reactnativefirebase-17cc5.appspot.com",
    messagingSenderId: "593248779194",
    appId: "1:593248779194:web:9b650428e5b028be073b83",
    measurementId: "G-FWZY7KYZR3"
};


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

firebase.firestore();

export default firebase;