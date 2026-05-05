import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2xWb-6mqfJ0GpSH2jXC9tWa40yqFbR3k",
  authDomain: "pizzame-a.firebaseapp.com",
  projectId: "pizzame-a",
  storageBucket: "pizzame-a.firebasestorage.app",
  messagingSenderId: "206228682663",
  appId: "1:206228682663:web:ea37533481351d38446882",
  measurementId: "G-H3BNKF58BW"
};

const firebase_app = initializeApp(firebaseConfig);
export const db = getFirestore(firebase_app);