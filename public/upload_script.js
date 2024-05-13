import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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
const db = getFirestore(app);

const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const mangaTitleInput = document.getElementById('mangaTitle');
  const mangaURLInput = document.getElementById('mangaURL');
  const mangaImageURLInput = document.getElementById('mangaImageURL');

  const mangaTitle = mangaTitleInput.value.trim();
  const mangaURL = mangaURLInput.value.trim();
  const mangaImageURL = mangaImageURLInput.value.trim();

  try {
    await addMangaToFirestore(mangaTitle, mangaURL, mangaImageURL);
    mangaTitleInput.value = '';
    mangaURLInput.value = '';
    mangaImageURLInput.value = '';
    alert('Manga uploaded successfully.');
    window.location.href = 'book_store.html';
  } catch (error) {
    console.error('Error uploading manga:', error);
    alert('Error uploading manga. Please try again.');
  }
});

// async function addMangaToFirestore(title, URL, imageURL) {
//   try {
//     const mangaRef = doc(collection(db, 'manga'));
//     await setDoc(mangaRef, {
//       downloadURL,
//       imageURL,
//       title,
//     });
//   } catch (error) {
//     console.error('Error adding manga to Firestore:', error);
//     throw new Error('Error adding manga to Firestore');
//   }
// }
async function addMangaToFirestore(title, URL, imageURL) {
    try {
      const mangaRef = doc(collection(db, 'manga'));
      await setDoc(mangaRef, {
        title,
        downloadURL: URL, // Assuming URL corresponds to downloadURL field in Firestore
        imageURL,
      });
      console.log('Manga uploaded successfully.'); // Add console log for debugging
    } catch (error) {
      console.error('Error adding manga to Firestore:', error);
      throw new Error('Error adding manga to Firestore');
    }
  }
