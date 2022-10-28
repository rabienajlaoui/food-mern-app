// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0k3pdiYQo5HY-1ixC9MIaGLaUEitkyFA",
  authDomain: "mern-app-615d0.firebaseapp.com",
  projectId: "mern-app-615d0",
  storageBucket: "mern-app-615d0.appspot.com",
  messagingSenderId: "1026281520121",
  appId: "1:1026281520121:web:25791aa648a25dc82c1b28",
  measurementId: "G-24Y5W9PVY3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);