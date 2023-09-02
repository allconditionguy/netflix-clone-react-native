import { initializeApp, getApps } from "firebase/app";

import {
    getAuth, onAuthStateChanged, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, updateProfile, signOut,
} from "firebase/auth";

import {
    getFirestore, collection, addDoc, setDoc, getDoc, getDocs,
    doc, onSnapshot, serverTimestamp,
    query, orderBy, collectionGroup, arrayUnion, arrayRemove, updateDoc,
} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPTAooE37GVG3JXwsX30-0wVEm6lXMCKU",
    authDomain: "netflix-clone-560e8.firebaseapp.com",
    projectId: "netflix-clone-560e8",
    storageBucket: "netflix-clone-560e8.appspot.com",
    messagingSenderId: "738810605970",
    appId: "1:738810605970:web:d440fb8343f71a109fd14b",
    measurementId: "G-0PJFBZKWKX"
  };

if (!getApps().length) initializeApp(firebaseConfig)


const db=app.firestore();
const auth = firebase.auth();

export {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    collection,
    collectionGroup,
    addDoc,
    getFirestore,
    onSnapshot,
    serverTimestamp,
    query,
    orderBy,
    getDoc,
    getDocs,
    setDoc,
    doc,
    arrayRemove,
    arrayUnion,
    updateDoc,
    db,
    auth,
};
