// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0atAvzJ-PGLUrOBTROfDjtX9YCijt1Qk",
  authDomain: "auth-milon-mala.firebaseapp.com",
  projectId: "auth-milon-mala",
  storageBucket: "auth-milon-mala.firebasestorage.app",
  messagingSenderId: "737974027072",
  appId: "1:737974027072:web:c4cb0eea2ba41bb69c70a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);