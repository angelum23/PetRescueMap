// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsWouPvo3DmSobqCLLmGTZUjKWEKJ1E0c",
  authDomain: "petrescuemap-94dba.firebaseapp.com",
  projectId: "petrescuemap-94dba",
  storageBucket: "petrescuemap-94dba.appspot.com",
  messagingSenderId: "730810895791",
  appId: "1:730810895791:web:da2f69b3ba66bb123fb35a",
  measurementId: "G-VV3P4TC7E9"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and set up persistence
const firebase_auth = initializeAuth(firebase_app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
const firebase_db = getFirestore(firebase_app);

export { firebase_app, firebase_auth, firebase_db };
