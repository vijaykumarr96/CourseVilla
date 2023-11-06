// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoe61RfdxybpUOpO3cDwAKwm3uoK_U-c8",
  authDomain: "coursevilla-c8c01.firebaseapp.com",
  projectId: "coursevilla-c8c01",
  storageBucket: "coursevilla-c8c01.appspot.com",
  messagingSenderId: "743304098465",
  appId: "1:743304098465:web:fd1213a39a4712587276e0",
  measurementId: "G-B86DR8X61N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
