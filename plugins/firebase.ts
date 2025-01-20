// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPCdcef4H2mYuzP-3Pbh6t8WAr65Uq_rU",
  authDomain: "webproject-f93aa.firebaseapp.com",
  projectId: "webproject-f93aa",
  storageBucket: "webproject-f93aa.firebasestorage.app",
  messagingSenderId: "563943750992",
  appId: "1:563943750992:web:e49492f70b632d0c648055",
  measurementId: "G-8CNR1YZNJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);