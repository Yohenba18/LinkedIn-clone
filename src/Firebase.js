import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBfGKXg3lN-ctqe4ITY5T6TeKdl_CntJro",
    authDomain: "linkedin-clone-adbca.firebaseapp.com",
    projectId: "linkedin-clone-adbca",
    storageBucket: "linkedin-clone-adbca.appspot.com",
    messagingSenderId: "112045600691",
    appId: "1:112045600691:web:e9ae6b66aad413b1ea25c6"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };
