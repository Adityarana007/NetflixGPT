// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7T1Jv5GKMNVh3aEfePxHu3XpEoIUkXeE",
  authDomain: "netflix-gpt-51fae.firebaseapp.com",
  projectId: "netflix-gpt-51fae",
  storageBucket: "netflix-gpt-51fae.firebasestorage.app",
  messagingSenderId: "669470775704",
  appId: "1:669470775704:web:ef3dce9d115da20089f3ed",
  measurementId: "G-1SP51VNT5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();