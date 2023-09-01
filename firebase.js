import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAPTAooE37GVG3JXwsX30-0wVEm6lXMCKU",
    authDomain: "netflix-clone-560e8.firebaseapp.com",
    projectId: "netflix-clone-560e8",
    storageBucket: "netflix-clone-560e8.appspot.com",
    messagingSenderId: "738810605970",
    appId: "1:738810605970:web:d440fb8343f71a109fd14b",
    measurementId: "G-0PJFBZKWKX"
  };


let app;


if (firebase.apps.length ===0) {
    app = firebase.initializeApp(firebaseConfig)

} else{
    app = firebase.app()
}
