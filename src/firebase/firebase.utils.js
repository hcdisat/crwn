import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";
import config from "../config";

console.log("SUPERMAN", process.env);

firebase.initializeApp(config.firebase);

const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
export { auth, firestore, signInWithGoogle };
