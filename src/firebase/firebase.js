import * as firebase from 'firebase';

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
  name: 'Eugeny4'
});