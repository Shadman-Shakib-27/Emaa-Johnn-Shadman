// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYU6P-ESoPT1k0LTWclrIndCmmtLjrVGM",
  authDomain: "emaa-johnn-simplee.firebaseapp.com",
  projectId: "emaa-johnn-simplee",
  storageBucket: "emaa-johnn-simplee.appspot.com",
  messagingSenderId: "110549532768",
  appId: "1:110549532768:web:067f1aa8b4dc53b58e0305",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
