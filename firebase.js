// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhvXPJHf7yLLotBWxsL-cfbluSuOxNMec",
  authDomain: "hspantryapp-c2273.firebaseapp.com",
  projectId: "hspantryapp-c2273",
  storageBucket: "hspantryapp-c2273.appspot.com",
  messagingSenderId: "796112350954",
  appId: "1:796112350954:web:16ec78919bec8c5b6bb193",
  measurementId: "G-8KHS0Z1MNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {app,firestore}