import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsFybiGj7kU6IyUFagLSyJatw4eK6AgXc",
  authDomain: "mangastore-64f59.firebaseapp.com",
  projectId: "mangastore-64f59",
  storageBucket: "mangastore-64f59.appspot.com",
  messagingSenderId: "797706286925",
  appId: "1:797706286925:web:b42abf610dd2f7f021a904",
  measurementId: "G-Z9EK8DP5PV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("succussfully registerd")
      window.location.href="login.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});