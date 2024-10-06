// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV3TKVd3o9QgIosEeJX368XpbbTYF0b7I",
  authDomain: "car-website-6ed26.firebaseapp.com",
  projectId: "car-website-6ed26",
  storageBucket: "car-website-6ed26.appspot.com",
  messagingSenderId: "856750044761",
  appId: "1:856750044761:web:7b47b514418e16f6b12348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)

export default Auth;