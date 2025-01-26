import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
// Initialize Firebase services
const auth = getAuth(app);
const db = getDatabase(app);
 document.getElementById('registerButton').addEventListener('click', registerUser); 
        console.log("Function Called");

// Register function
function registerUser() {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Username:", username);
    

    // Validate inputs
    if (validateEmail(email) && validatePassword(password) && validateUsername(username)) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Save user details to the database
                set(ref(db, 'users/' + user.uid), { email, username })
                    .then(() => alert("User registered successfully! Go to login page."))
                    .catch((err) => alert("Error saving user to database: " + err.message));
            })
            .catch((error) => {
                alert("Error registering user: " + error.message);
            });
    } else {
        alert("Invalid input. Please check your details.");
    }
};

// Validation functions
function validateEmail(email) {
    const expression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return expression.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateUsername(username) {
    return username && username.trim().length > 0;
}




// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
// import { app } from './firebase-config.js';

// // Initialize Firebase services
// const auth = getAuth(app);
// const db = getDatabase(app);

// // Function to register user
// function registerUser() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const username = document.getElementById('username').value;

//     console.log("Registering user with:", email, username); // Debugging

//     if (validateEmail(email)) {
//         if (validatePassword(password)) {
//             if (validateUsername(username)) {
//                 createUserWithEmailAndPassword(auth, email, password)
//                     .then((userCredential) => {
//                         const user = userCredential.user;
//                         console.log("User signed up:", user);

//                         const user_data = {
//                             email: email,
//                             username: username
//                         };

//                         // Add to Realtime Database
//                         set(ref(db, 'users/' + user.uid), user_data)
//                             .then(() => {
//                                 alert("User registered successfully!");
//                             })
//                             .catch((dbError) => {
//                                 console.error("Database error:", dbError);
//                                 alert("Failed to save user to database.");
//                             });
//                     })
//                     .catch((authError) => {
//                         console.error("Auth error:", authError);
//                         alert(authError.message);
//                     });
//             } else {
//                 alert("Username is invalid");
//             }
//         } else {
//             alert("Password is invalid");
//         }
//     } else {
//         alert("Email is invalid");
//     }
// }

// // Validation functions
// function validateEmail(email) {
//     const expression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
//     return expression.test(email);
// }

// function validatePassword(password) {
//     return password.length >= 6;
// }

// function validateUsername(username) {
//     return username != null && username.length > 0;
// }

// // Attach event listener
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("registerButton").addEventListener("click", registerUser);
// });


// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
// import { app } from './firebase-config.js';

// // import { getAuth, createUserWithEmailAndPassword } from "firebase/app";
// // import { getDatabase, ref, set } from "firebase/app";
// // import './firebase-config.js';

// // Initialize Variables
// const auth = getAuth(app);
// const db = getDatabase(app);

// // Set up our register function
// function registerUser() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const username = document.getElementById('username').value;
    
//     console.log("Email:", email, "Password:", password, "Username:", username);

//     if (validateEmail(email)) {
//         if (validatePassword(password)) {
//             if (validateUsername(username)) {
//                 createUserWithEmailAndPassword(auth, email, password)
//                     .then((userCredential) => {
//                         // Signed in
//                         const user = userCredential.user;
//                         alert("User Signed Up");
//                         const user_data = {
//                             email: email,
//                             username: username
//                         };
//                         set(ref(db, 'users/' + user.uid), user_data);
//                     })
//                     .catch((error) => {
//                         const errorCode = error.code;
//                         const errorMessage = error.message;
//                         console.error("Error Code:", errorCode, "Error Message:", errorMessage);
//                         alert(errorMessage);
//                     });
                    
//             } else {
//                 alert("Username is invalid");
//             }
//         } else {
//             alert("Password is invalid");
//         }
//     } else {
//         alert("Email is invalid");
//     }
// }

// function validateEmail(email) {
//     const expression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
//     return expression.test(email);
// }

// function validatePassword(password) {
//     return password.length >= 6;
// }

// function validateUsername(username) {
//     return username != null && username.length > 0;
// }
  

// document.getElementById("registerButton").addEventListener("click", registerUser);