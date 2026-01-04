// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7wyx_JHuTyeYlg0BC-nHc2ojA6orTa-g",
  authDomain: "elevates-leads.firebaseapp.com",
  projectId: "elevates-leads",
  storageBucket: "elevates-leads.firebasestorage.app",
  messagingSenderId: "708671548672",
  appId: "1:708671548672:web:3c0bcb3b8603a0099f97e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);