// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAxJqW1mgee7FiVtL1l7yLRAi0fFrFpUs",
  authDomain: "pet-care-winter-fa63b.firebaseapp.com",
  projectId: "pet-care-winter-fa63b",
  storageBucket: "pet-care-winter-fa63b.firebasestorage.app",
  messagingSenderId: "566323033310",
  appId: "1:566323033310:web:63a6f4ae7f20ae5a743e4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
