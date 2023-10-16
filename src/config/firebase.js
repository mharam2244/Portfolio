// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_rgcvQmONpwTCjNwNRFz7YqMXK-_ypCg",
    authDomain: "portfolio-78752.firebaseapp.com",
    projectId: "portfolio-78752",
    storageBucket: "portfolio-78752.appspot.com",
    messagingSenderId: "577321832418",
    appId: "1:577321832418:web:e562202364cc706de973bb",
    measurementId: "G-XGGW79F0H0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);