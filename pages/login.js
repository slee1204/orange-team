import React, { useState } from "react";
import styled from "styled-components"
import { 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { auth } from "../firebase/firebase.config"

export default function Login() {
    return (
    <div>This is a Log in page</div>
    )
}