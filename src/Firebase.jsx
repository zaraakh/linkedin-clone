import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDiooBaAIVjO5ZWutkS8-kIafjfiuJl8fk",
    authDomain: "linkedin-clone-yt-33a74.firebaseapp.com",
    projectId: "linkedin-clone-yt-33a74",
    storageBucket: "linkedin-clone-yt-33a74.appspot.com",
    messagingSenderId: "630663732166",
    appId: "1:630663732166:web:7eedf15762c27c3554b0c7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
 
  export { db, auth };