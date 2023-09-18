import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHEg9_6UZEjrD06UCZFHq1QllPGvjKOhg",
  authDomain: "dodev-bbcc7.firebaseapp.com",
  projectId: "dodev-bbcc7",
  storageBucket: "dodev-bbcc7.appspot.com",
  messagingSenderId: "915159720570",
  appId: "1:915159720570:web:bfeda26e88334ff34391c3",
  measurementId: "G-581EB094WN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const colRef = collection(db, "ideas");

export const auth = getAuth();
