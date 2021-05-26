import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBdDfFiDnhSLbfSGIfUDP1FU8OUIFMEcTk",
    authDomain: "disneyplus-clone-e76f9.firebaseapp.com",
    projectId: "disneyplus-clone-e76f9",
    storageBucket: "disneyplus-clone-e76f9.appspot.com",
    messagingSenderId: "576602047565",
    appId: "1:576602047565:web:223d51884ac25882710804"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;