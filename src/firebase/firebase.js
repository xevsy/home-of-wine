import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

const config = {
  apiKey: "AIzaSyCE_QFWen3TX1N6aGPKckwAk-t2M99xmkM",
  authDomain: "home-of-wine.firebaseapp.com",
  databaseURL: "https://home-of-wine.firebaseio.com",
  projectId: "home-of-wine",
  storageBucket: "",
  messagingSenderId: "607645741197"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Eugeny5'
});