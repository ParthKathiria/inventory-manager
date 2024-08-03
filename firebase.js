// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFireStore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfYB9kYLhbjVCFV-PBqH126PDX-WltR5A",
  authDomain: "inventory-management-34fdc.firebaseapp.com",
  projectId: "inventory-management-34fdc",
  storageBucket: "inventory-management-34fdc.appspot.com",
  messagingSenderId: "487111549930",
  appId: "1:487111549930:web:1344f923a94a4473e78893",
  measurementId: "G-QPF08E0R63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFireStore(app);

export{firestore}