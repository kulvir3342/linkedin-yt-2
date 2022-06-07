import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCtWcEfg1H5tj4rLBNSjr8R-kA5sC5Ag2o",
    authDomain: "linkedin-clone-yt-1d82c.firebaseapp.com",
    projectId: "linkedin-clone-yt-1d82c",
    storageBucket: "linkedin-clone-yt-1d82c.appspot.com",
    messagingSenderId: "1003283328948",
    appId: "1:1003283328948:web:e4088c95824bd9384c4ce1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth};
