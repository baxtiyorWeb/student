import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  addDoc,
  where
} from "firebase/firestore";

import {
  getAuth,
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX1TLBfXTOGgyXQwIbXOwjKji56EnP-IY",
  authDomain: "students-de195.firebaseapp.com",
  projectId: "students-de195",
  storageBucket: "students-de195.appspot.com",
  messagingSenderId: "56134141466",
  appId: "1:56134141466:web:b88504c5dfd09eba8ff3a3",
  measurementId: "G-1DEPCKH4XB"
};
// initializy app
export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async (e) => {
  e.preventDefault()
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
  // const registerWithEmailAndPassword = async (name, email, password) => {

  //   try {
  //     const res = await createUserWithEmailAndPassword(auth, email, password);
  //     const user = res.user;
  //     await addDoc(collection(db, "users"), {
  //       uid: user.uid,
  //       name,
  //       authProvider: "local",
  //       email,
  //     });
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }
  // };
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
// export const db = getDatabase(app);
