import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyBOrNvhMfaAqzW5MHn074yUcprwatyT8Zw",
    authDomain: "sito-e63c9.firebaseapp.com",
    databaseURL: "https://sito-e63c9.firebaseio.com",
    projectId: "sito-e63c9",
    storageBucket: "sito-e63c9.appspot.com",
    messagingSenderId: "686723819076"
  };
firebase.initializeApp(config);
export const database = firebase.database();
export const firebaseAuth = firebase.auth;
export const storageCircolari = firebase.storage().ref("circolari");
export const storageEsecuzioni = firebase.storage().ref("esecuzioni");
//export default database;
