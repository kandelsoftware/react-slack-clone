import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDX9mfzYQB6ZwYz_vFJ5TFktuhayZ4bnpY",
  authDomain: "react-slack-clone-3199a.firebaseapp.com",
  databaseURL: "https://react-slack-clone-3199a.firebaseio.com",
  projectId: "react-slack-clone-3199a",
  storageBucket: "react-slack-clone-3199a.appspot.com",
  messagingSenderId: "163204119340"
};
firebase.initializeApp(config);
export default firebase;
