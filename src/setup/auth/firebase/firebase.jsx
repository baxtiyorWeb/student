import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBcfbkEKW5RjsFzXikxjycfo1nmrlGItG8",
  authDomain: "developer-16e4e.firebaseapp.com",
  databaseURL: "https://developer-16e4e-default-rtdb.firebaseio.com",
  projectId: "developer-16e4e",
  storageBucket: "developer-16e4e.appspot.com",
  messagingSenderId: "770168986630",
  appId: "1:770168986630:web:4d9f3b55bb242030183787",
  measurementId: "G-41RRC6WQR7",
};
// initializy app

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
