import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBVGlmOz6EyZfTgqY6YNGO8dbgr9iRGwFY",
    authDomain: "standard-bricks.firebaseapp.com",
    databaseURL: "https://standard-bricks.firebaseio.com",
    projectId: "standard-bricks",
    storageBucket: "standard-bricks.appspot.com",
    messagingSenderId: "817436130183"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/orders');
  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();