// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2GbgO8uAL755x-a31pe-r2NRxc168NxA",
  authDomain: "portfolio-6c4e5.firebaseapp.com",
  projectId: "portfolio-6c4e5",
  storageBucket: "portfolio-6c4e5.appspot.com",
  messagingSenderId: "185795171193",
  appId: "1:185795171193:web:25e5f1fd85503fcf7715a8",
  databaseURL: "https://portfolio-6c4e5-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);