// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-application-fabb5.firebaseapp.com",
  projectId: "blog-application-fabb5",
  storageBucket: "blog-application-fabb5.appspot.com",
  messagingSenderId: "189658148005",
  appId: "1:189658148005:web:65585a28cd0b6c61bc314c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
