// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDiQJdRAMc0xCOm5pEyyldIuFPN_D8KFNg",
  authDomain: "fir-3cd34.firebaseapp.com",
  databaseURL: "https://fir-3cd34-default-rtdb.firebaseio.com",
  projectId: "fir-3cd34",
  storageBucket: "fir-3cd34.appspot.com",
  messagingSenderId: "998292932734",
  appId: "1:998292932734:web:34a8db435bf6bd78e4302f",
  measurementId: "G-0K8YGNKZ2H"
});
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






 