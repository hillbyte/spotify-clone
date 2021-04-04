import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDmISPLr69TogbJsoW34R-15zylP3m3d4o",
  authDomain: "spotify-clone-57525.firebaseapp.com",
  projectId: "spotify-clone-57525",
  storageBucket: "spotify-clone-57525.appspot.com",
  messagingSenderId: "274363973872",
  appId: "1:274363973872:web:67d114ea11cc96bf6a0235",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
