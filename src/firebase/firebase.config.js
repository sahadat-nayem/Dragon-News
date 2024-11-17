// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRUyX47TWYm2IzgRPI3LzfBopOhWASTrs",
  authDomain: "dragon-news-bb3a0.firebaseapp.com",
  projectId: "dragon-news-bb3a0",
  storageBucket: "dragon-news-bb3a0.firebasestorage.app",
  messagingSenderId: "228489876294",
  appId: "1:228489876294:web:5e5df7ac15659e662e4b47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;