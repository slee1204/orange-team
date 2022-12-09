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

import { auth } from "../newfirebase/firebase.config"
import ProfileBox from "../comps/ProfileBio";
import FollowingBox from "../comps/FollowingBox";
import SuggestedFollowingBox from "../comps/SuggestedFollowBox";


const WholeCont = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
gap: 20px;
align-content: flex-start;
height: 100vh;
width: fit-content;
padding: 10px;
`

const LeftCont = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
height: fit-content;
flex-direction: column;
`
const MiddleCont = styled.div`
display:flex;
width: fit-content;
flex-wrap: wrap;
flex-direction: column;
height: 100%;
justify-content: flex-start;
gap: 20px;
`

const RightCont = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
`

export default function Login() {
  return (
    <WholeCont>

      <LeftCont>
        <ProfileBox></ProfileBox>
        <FollowingBox>
        </FollowingBox>
      </LeftCont>

      <MiddleCont>
        <div style={{ width: "650px" }}></div>
        {/* Post Section Goes Here */}
      </MiddleCont>

      <RightCont>
        <SuggestedFollowingBox>
        </SuggestedFollowingBox>
      </RightCont>
    </WholeCont >
  )
}