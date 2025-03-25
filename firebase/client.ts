// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV5ehoDOJwJ-FHkhvWaGKsToa9Bnyuk7Y",
  authDomain: "prepmaken.firebaseapp.com",
  projectId: "prepmaken",
  storageBucket: "prepmaken.firebasestorage.app",
  messagingSenderId: "331405610841",
  appId: "1:331405610841:web:0e767069340212dadac648",
  measurementId: "G-MKPP7SSHDY"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
//const analytics = getAnalytics(app);

export const auth= getAuth(app);
export const db = getFirestore(app)