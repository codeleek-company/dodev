import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRYQjQuByIaFSMHzgW7qegd9lf4XYGbUc",
  authDomain: "dodev-13968.firebaseapp.com",
  projectId: "dodev-13968",
  storageBucket: "dodev-13968.appspot.com",
  messagingSenderId: "865039891717",
  appId: "1:865039891717:web:8e0ed4beec85b4aeeb0b6c",
  measurementId: "G-1L5FJRQF2V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
