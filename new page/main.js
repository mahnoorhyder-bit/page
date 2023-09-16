// setting up firebase with our website
const firebaseConfig = {
    apiKey: "AIzaSyD-vYr76eG4upzZwmU327h-CKkOloKZNeY",
    authDomain: "page-c0493.firebaseapp.com",
    projectId: "page-c0493",
    storageBucket: "page-c0493.appspot.com",
    messagingSenderId: "342172923995",
    appId: "1:342172923995:web:95cead06f92d2deb6f677e",
    measurementId: "G-3Y990VCZ0X"
};
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}