import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGRrLj9hoh6qy7SdVfI8IH4YwuzFzTZSM",
  authDomain: "new-team-orange.firebaseapp.com",
  projectId: "new-team-orange",
  storageBucket: "new-team-orange.appspot.com",
  messagingSenderId: "988424312484",
  appId: "1:988424312484:web:67fb59b3d98b6cd134b831"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db