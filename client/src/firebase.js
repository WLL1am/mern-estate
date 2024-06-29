// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4f0da.firebaseapp.com",
  projectId: "mern-estate-4f0da",
  storageBucket: "mern-estate-4f0da.appspot.com",
  messagingSenderId: "16259501763",
  appId: "1:16259501763:web:13e980552965694aecdc76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);