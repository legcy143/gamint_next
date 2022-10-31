// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqG44QSuCYooIe691xaXvbexr89ZAaT9k",
  authDomain: "gamynt-app.firebaseapp.com",
  projectId: "gamynt-app",
  storageBucket: "gamynt-app.appspot.com",
  messagingSenderId: "91948413141",
  appId: "1:91948413141:web:f80b10c159d107f035325c",
  measurementId: "G-KNLX4DJPV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth  = getAuth(app)

export {auth}