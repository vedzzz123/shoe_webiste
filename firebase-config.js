
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAOK2TT_17Np5PILNa0pGnkEchqO0JcCxs",
  authDomain: "shoewebsite-2c4fb.firebaseapp.com",
  databaseURL: "https://shoewebsite-2c4fb-default-rtdb.firebaseio.com",
  projectId: "shoewebsite-2c4fb",
  storageBucket: "shoewebsite-2c4fb.firebasestorage.app",
  messagingSenderId: "353349496826",
  appId: "1:353349496826:web:c2653ba225013338da3e43"
};


const app = initializeApp(firebaseConfig);
export { app };


// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAOK2TT_17Np5PILNa0pGnkEchqO0JcCxs",
//     authDomain: "shoewebsite-2c4fb.firebaseapp.com",
//     databaseURL: "https://shoewebsite-2c4fb-default-rtdb.firebaseio.com",
//     projectId: "shoewebsite-2c4fb",
//     storageBucket: "shoewebsite-2c4fb.firebasestorage.app",
//     messagingSenderId: "353349496826",
//     appId: "1:353349496826:web:c2653ba225013338da3e43"
//   };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);