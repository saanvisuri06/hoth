import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDWmOn6vviCdqUBP_Ro6Nkiz82oMpQg87o",
    databaseURL: "https://hoth-19ead-default-rtdb.firebaseio.com/",
    authDomain: "hoth-19ead.firebaseapp.com",
    projectId: "hoth-19ead",
    storageBucket: "hoth-19ead.firebasestorage.app",
    messagingSenderId: "512358844125",
    appId: "1:512358844125:web:d1fb54f23a46b867a4bd34",
    measurementId: "G-D0DRNE1KXW"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);

  export { auth, db };