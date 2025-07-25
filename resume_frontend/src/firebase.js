// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCFzFrPPtZRHfU3IGmP0iHNkqhvaggtWP0",
  authDomain: "smartresumescan.firebaseapp.com",
  projectId: "smartresumescan",
  storageBucket: "smartresumescan.appspot.com", // corrected `.app` to `.com`
  messagingSenderId: "827926852734",
  appId: "1:827926852734:web:5b7b5fbfba4b2a5de2142f",
  measurementId: "G-7PPCDCM4Z9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, analytics };
