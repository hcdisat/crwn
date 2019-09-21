import { firestore, auth, signInWithGoogle } from "../firebase/firebase.utils";

let currentUser = null;

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      });
    } catch (ex) {
      console.log("error creating user", ex.message);
    }
  }

  return userRef;
};

export const loginWithUserAndPassword = async (email, password) => {
  await auth.signInWithEmailAndPassword(email, password);
};

export const login = action => {
  return auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        const resultUser = {
          id: snapShot.id,
          ...snapShot.data()
        };
        action(resultUser);
        setCurrentUser(resultUser);
      });
    }
    action(userAuth);
    setCurrentUser(userAuth);
  });
};

export const createUserWithEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  createUserProfileDocument(user, { displayName });
};

export const signOut = () => {
  auth.signOut();
  window.location.replace("/");
};

export const getCurrentUser = () => {
  return currentUser;
};

export const setCurrentUser = user => {
  currentUser = user;
};

export default {
  createUserProfileDocument,
  createUserWithEmailAndPassword,
  loginWithUserAndPassword,
  login,
  setCurrentUser,
  getCurrentUser,
  signOut,
  signInWithGoogle
};
