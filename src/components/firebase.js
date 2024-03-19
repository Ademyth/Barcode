// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7qZ2JhytR3H7TrLKOmFncEHmWowwpINg",
  authDomain: "qr-scanner-auth.firebaseapp.com",
  projectId: "qr-scanner-auth",
  storageBucket: "qr-scanner-auth.appspot.com",
  messagingSenderId: "925321263210",
  appId: "1:925321263210:web:60328f98910f9a8ccdb213",
  measurementId: "G-BQLCDCYHWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

export default app;