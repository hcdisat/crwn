import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDNC6-VPxZYi2QjsFMBhDT00u_4lYLgkPs",
  authDomain: "crown-db-3b453.firebaseapp.com",
  databaseURL: "https://crown-db-3b453.firebaseio.com",
  projectId: "crown-db-3b453",
  storageBucket: "",
  messagingSenderId: "830213159399",
  appId: "1:830213159399:web:a9f70773b3b2f913cee542"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
