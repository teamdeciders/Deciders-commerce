// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcfuGnU4T3CsaEGpnBHFHCYW8MxFwy-Ho",
    authDomain: "deciders-commaerce.firebaseapp.com",
    projectId: "deciders-commaerce",
    storageBucket: "deciders-commaerce.appspot.com",
    messagingSenderId: "477769325651",
    appId: "1:477769325651:web:4a3b0b92075cd01a023aa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth