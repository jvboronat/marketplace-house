// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAemGahmAn7UaEdnJkZEIa101-31Xq2rP4",
  authDomain: "marketplace-house.firebaseapp.com",
  projectId: "marketplace-house",
  storageBucket: "marketplace-house.appspot.com",
  messagingSenderId: "356437006346",
  appId: "1:356437006346:web:91cb21a941ad8fb40b67f3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()