import React, { useState } from "react";
import { useRouter } from 'next/router'
import styled from "styled-components"
import { 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import db, { auth } from "../newfirebase/firebase.config"
import { setDoc, doc } from "firebase/firestore";


// Components
const Wrapper = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F49842
`
const Main = styled.div`
  width:100vw;
  height:85vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const LeftBox = styled.div`
  border-radius: 25px;
  background-color: #ffffff;
  height: auto;
  display: flex;
  align-items: center;

  img {
    width: 275px;
    height: 590px;
  }
`

const RightBox = styled.div`
  border-radius: 25px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFE2A9;
`
const FirstBox = styled.div`
  width: 350px;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 70px;
    height: auto;
  }
`

const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;

  input {
    width: 100%
  }

  }
`
const ButtonCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 5px 0;
  }
`
const Button = styled.button`
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #F49842;
  border: none;
  text-align: center;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  margin: 10px 0;
  width: 100%;
  cursor: pointer;
`
const Or = styled.div`
  width:75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  hr {
    flex-grow: 1;
    border-top:  solid #000000;
  }

  p {
    color: #000000;
    font-weight: bold;
    font-size: 14px;
    width: 50px;
    text-align: center;
  }
`
const GoogleLogin = styled.button`
  width: 75%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  border-radius: 5px;
  border: 0.25px solid #385185;
  color: #385185;
  font-weight: bold;
  font-size: 14px;
  padding: 6px 0;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`

export default function Home() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("")


  const CreateUser = async () => {
    try{
      setRegisterEmail("");
      setRegisterPassword("");
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user.user.uid);
      db.collection("newuser").add({
        uid:user.user.uid,
        email: loginEmail,
        password: loginPassword
      })
    } catch(error) {
      console.log(error.message)
    }
  }


  React.useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>setUser(currentUser))
  },[])

  const handleSubmit = event => {
    console.log("handle submit rand")
    event.preventDefault();
    event.target.reset();
  }

  const r = useRouter();

  const LogIn = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      // const docRef = doc(db, "userdata", user.user.uid)
      console.log(user.user.uid);
      r.push("/login")
    } catch(error) {
      console.log(error.message)
    }
  }

  // this can be added to homepage where users already signed in
  const LogOut = async () => {
    await signOut(auth);
    console.log("user logged out")
  }


  const GoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    const authorization = auth;
    const result = await signInWithPopup(authorization, provider);
    db.collection("newuser").onSnapshot({
      uid:user.user.uid,
      email: loginEmail,
      password: loginPassword
    })
    r.push("/login")
    console.log(result)
  }

  return(
    <Wrapper>
      <Main>
      
        <LeftBox>
          <img src="orange-slice.png" />
        </LeftBox>

        <RightBox>
        
          <FirstBox>
            <h1> Join Twitter Today </h1>
            <img style={{marginBottom: "15px"}} src="avatar.png" />
            
            <InputCont>
              <form onSubmit={handleSubmit}>
                <input 
                onChange={(event)=>{
                  setRegisterEmail(event.target.value)
                  setLoginEmail(event.target.value)

                }}
                type="email" 
                className="email" 
                placeholder="Email" 
                required />
                <input 
                onChange={(event)=>{
                  setRegisterPassword(event.target.value)
                  setLoginPassword(event.target.value)

                }}
                type="password" className="password" placeholder="Password" required />
                <ButtonCont>
                  <Button type= "submit" onClick={()=>LogIn()}>Log In</Button>
                  <p>Don't have an account?</p>
                  <Button type= "submit" onClick={()=>CreateUser()} >Sign Up</Button>
                </ButtonCont>
              </form>
            </InputCont>

            
            <Or>
              <hr />
              <p>OR</p>
              <hr />
            </Or>
            
            
            <GoogleLogin onClick={()=>GoogleSignIn()}>
                Log in with Google
            </GoogleLogin>

          </FirstBox>
      
        </RightBox>

        </Main>
    </Wrapper>

)
  }
