// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPCdcef4H2mYuzP-3Pbh6t8WAr65Uq_rU",
  authDomain: "webproject-f93aa.firebaseapp.com",
  projectId: "webproject-f93aa",
  storageBucket: "webproject-f93aa.firebasestorage.app",
  messagingSenderId: "563943750992",
  appId: "1:563943750992:web:e49492f70b632d0c648055",
  measurementId: "G-8CNR1YZNJR"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Authentication servisini al
const auth = getAuth(app);

export { auth };