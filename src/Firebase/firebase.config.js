// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcPjlSdZlZH6UBVfZjDaSs--y-mWyXwp4",
  authDomain: "assignment-10-chef-recip-a7bf5.firebaseapp.com",
  projectId: "assignment-10-chef-recip-a7bf5",
  storageBucket: "assignment-10-chef-recip-a7bf5.appspot.com",
  messagingSenderId: "1034662839880",
  appId: "1:1034662839880:web:9a09cf4d8b4811fb4efa7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app