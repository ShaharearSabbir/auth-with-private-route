// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrQm2LpJQTUKKFXhTSfcIeglkwW1RXNr4",
  authDomain: "auth-intigration-e32be.firebaseapp.com",
  projectId: "auth-intigration-e32be",
  storageBucket: "auth-intigration-e32be.firebasestorage.app",
  messagingSenderId: "632980674607",
  appId: "1:632980674607:web:42b034754b4eeb05300eda",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
