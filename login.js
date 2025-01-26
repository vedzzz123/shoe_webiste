import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOK2TT_17Np5PILNa0pGnkEchqO0JcCxs",
    authDomain: "shoewebsite-2c4fb.firebaseapp.com",
    databaseURL: "https://shoewebsite-2c4fb-default-rtdb.firebaseio.com",
    projectId: "shoewebsite-2c4fb",
    storageBucket: "shoewebsite-2c4fb.firebasestorage.app",
    messagingSenderId: "353349496826",
    appId: "1:353349496826:web:c2653ba225013338da3e43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginButton').addEventListener('click', loginUser);
    console.log("Event listener added to login button");
});

// Login function
function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('loginemail').value;
    const password = document.getElementById('loginpassword').value;

    if (!validateEmail(email)) {
        alert("Invalid email format");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User:", user);
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error("Error signing in:", error);
            alert("Error signing in: " + error.message);
        });
}

function validateEmail(email) {
    const expression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return expression.test(email);
}
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAOK2TT_17Np5PILNa0pGnkEchqO0JcCxs",
//     authDomain: "shoewebsite-2c4fb.firebaseapp.com",
//     databaseURL: "https://shoewebsite-2c4fb-default-rtdb.firebaseio.com",
//     projectId: "shoewebsite-2c4fb",
//     storageBucket: "shoewebsite-2c4fb.firebasestorage.app",
//     messagingSenderId: "353349496826",
//     appId: "1:353349496826:web:c2653ba225013338da3e43"
// };

// const app = initializeApp(firebaseConfig);

// // Initialize Firebase services
// const auth = getAuth(app);
//  document.getElementById('loginButton').addEventListener('click', loginUser); 
//         console.log("Function Called");

// // Register function
// function loginUser() {
//     event.preventDefault(); 
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const username = document.getElementById('username').value;

//     // console.log("Email:", email);
//     // console.log("Password:", password);
//     // console.log("Username:", username);
    
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log("User:", user);
//         window.location.href = "index.html";
//         console.log("Signed In")
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         alert(errorMessage);
//         console.log("Error:", errorMessage);
//         // ..
//     });
// }
    // Validate inputs
    


