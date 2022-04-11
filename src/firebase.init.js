// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlXfpeHE_GYk3kRXkDhZ0mGK_frTf-41Q",
    authDomain: "ema-john-simple-6943d.firebaseapp.com",
    projectId: "ema-john-simple-6943d",
    storageBucket: "ema-john-simple-6943d.appspot.com",
    messagingSenderId: "321180409934",
    appId: "1:321180409934:web:71015d8aac1e16f009a31f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;