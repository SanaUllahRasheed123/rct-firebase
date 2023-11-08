// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGIku3m77-Tmtxv0j6apc8JCuajBZENPM",
  authDomain: "auth-firebase1-8d02f.firebaseapp.com",
  projectId: "auth-firebase1-8d02f",
  storageBucket: "auth-firebase1-8d02f.appspot.com",
  messagingSenderId: "1075477321776",
  appId: "1:1075477321776:web:ed2929325c49a93325b5f5",
  measurementId: "G-TG2SY9QJVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);