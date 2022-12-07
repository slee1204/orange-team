import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEJAlc3Va67x41l1iVYIgAk9VGYSf6mJ0",
  authDomain: "orange-team-4f278.firebaseapp.com",
  projectId: "orange-team-4f278",
  storageBucket: "orange-team-4f278.appspot.com",
  messagingSenderId: "596395074632",
  appId: "1:596395074632:web:fcdfc30ba1e51698eda47d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);