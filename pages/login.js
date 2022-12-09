import React, { useState, useEffect } from "react";
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
import Feed from "../comps/Feed";

const WholeCont = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
gap: 20px;
align-content: flex-start;
width: 100vw;
padding: 10px 20px;
overflow: scroll;
`

const LeftCont = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
height: fit-content;
flex-direction: column;
flex-grow: 1;
`
const MiddleCont = styled.div`
display:flex;
width: fit-content;
flex-wrap: wrap;
flex-direction: column;
height: 100%;
justify-content: flex-start;
gap: 20px;
flex-grow: 4;
`
const RightCont = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
flex-grow:1;
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
        <Feed></Feed>
      </MiddleCont>

      <RightCont>
        <SuggestedFollowingBox>
        </SuggestedFollowingBox>
      </RightCont>
    </WholeCont >
  )
}
