import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

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

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      alert("Logged in successfully!");
      window.location.href="book_store.html";
      // Redirect or perform other actions here
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});