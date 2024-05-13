import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
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
  async function fetchMangaData() {
    try {
      const querySnapshot = await getDocs(collection(db, 'manga'));
      querySnapshot.forEach((doc) => {
        const mangaData = doc.data();
        if (mangaData) {
          renderMangaCard(mangaData);
        } else {
          console.error('No manga data found');
        }
      });
    } catch (error) {
      console.error('Error  manga data:', error);
    }
  }
  function renderMangaCard(mangaData) {
    console.log(mangaData)
    const mangaContainer = document.getElementById('mangaContainer');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${mangaData.imageURL}" alt="Manga Cover" style="width: 300px; height: 200px; border-radius: 5%">
      <div class="container">
        <h4><b>${mangaData.title}</b></h4>
        <a href="${mangaData.URL}" download="${mangaData.title.replace(/\s+/g, '_')}.pdf">Read</a>
      </div>
    `;
    mangaContainer.appendChild(card);
  }
  window.onload = () => {
    fetchMangaData();
  };
  document.addEventListener('DOMContentLoaded', () => {
    const uploadButton = document.getElementById('uploadButton');
    uploadButton.addEventListener('click', () => {
      window.location.href = 'upload.html'; // Redirect to the upload page
    });
  });