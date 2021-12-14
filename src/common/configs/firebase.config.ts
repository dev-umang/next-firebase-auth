// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxJYETQPj6RvL93m5yYeAG7TmCzQC59V4",
  authDomain: "next-social-app-e957b.firebaseapp.com",
  projectId: "next-social-app-e957b",
  storageBucket: "next-social-app-e957b.appspot.com",
  messagingSenderId: "1081650822457",
  appId: "1:1081650822457:web:516cd74a29125d36b67ce8",
  measurementId: "G-BCMPMCS9L4",
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(Firebase);
export const firestore = getFirestore(Firebase);
export const Auth = getAuth(Firebase);
