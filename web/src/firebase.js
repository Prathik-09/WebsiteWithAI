// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXDY8ikdIhhl8STbXXJVVkORIbVQfUuNw",
  authDomain: "webcafeland-3cc3b.firebaseapp.com",
  projectId: "webcafeland-3cc3b",
  storageBucket: "webcafeland-3cc3b.firebasestorage.app",
  messagingSenderId: "351638663633",
  appId: "1:351638663633:web:beffff4fcc3f661747f0f0",
  measurementId: "G-EWNHQQ45CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);