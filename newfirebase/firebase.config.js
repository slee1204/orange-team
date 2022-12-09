import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7yxXBhmdCFdBU8ckQxnoPyZ51pPtXgl8",
  authDomain: "team-orange-692ea.firebaseapp.com",
  projectId: "team-orange-692ea",
  storageBucket: "team-orange-692ea.appspot.com",
  messagingSenderId: "939310906005",
  appId: "1:939310906005:web:cef89426b622e09a8ef99c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);