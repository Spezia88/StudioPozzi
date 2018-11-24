import firebase from 'firebase';
let devConfig,prodConfig;

prodConfig = {
    apiKey: "AIzaSyBOrNvhMfaAqzW5MHn074yUcprwatyT8Zw",
    authDomain: "sito-e63c9.firebaseapp.com",
    databaseURL: "https://sito-e63c9.firebaseio.com",
    projectId: "sito-e63c9",
    storageBucket: "sito-e63c9.appspot.com",
    messagingSenderId: "686723819076"
  };

devConfig = {
    apiKey: "AIzaSyBi58fXKTWwjPDvPMZd7QxOG1v95-UEiik",
    authDomain: "sitotmp.firebaseapp.com",
    databaseURL: "https://sitotmp.firebaseio.com",
    projectId: "sitotmp",
    storageBucket: "sitotmp.appspot.com",
    messagingSenderId: "807202230538"
  };



const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;






firebase.initializeApp(config);
export const database = firebase.database();
export const firebaseAuth = firebase.auth;
export const storageCircolari = firebase.storage().ref("circolari");
export const storageEsecuzioni = firebase.storage().ref("esecuzioni");
//export default database;
