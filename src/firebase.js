// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3BjGk-5uh95tN8YIl93jQ3qViyGGs5NY",
  authDomain: "chat-b6658.firebaseapp.com",
  projectId: "chat-b6658",
  storageBucket: "chat-b6658.appspot.com",
  messagingSenderId: "1015785935328",
  appId: "1:1015785935328:web:9b49cf434f6625ea2a1b85"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage = getStorage();
export const db= getFirestore();