// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/storage";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyC5nUM6UJIXxPn1gNI6sn0lW0svpC_8kyU",
	authDomain: "disneyhotstar-de9cd.firebaseapp.com",
	projectId: "disneyhotstar-de9cd",
	storageBucket: "disneyhotstar-de9cd.appspot.com",
	messagingSenderId: "578312676205",
	appId: "1:578312676205:web:a0f7ec392f6ab1dc343064",
	measurementId: "G-4QCK88BNGN",
};
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
const provider = new GoogleAuthProvider();

const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
