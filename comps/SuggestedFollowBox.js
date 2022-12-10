import styled from "styled-components"
import { BigBox } from "./ProfileBio";
import Follower from "./Followers";
import { FollowingTitle } from "./FollowingBox";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

// const SugFollowBoxCont = styled.div`
// width: 300px;
// height: 500px;
// border: 2px solid #F49842;
// padding-top: 50px;
// border-radius: 10px;
// background-color: white;
// `

// const SugFollowTitle = styled.div`
// display: flex;
// justify-content: flex-start;
// align-items: flex-start;
// font-size: 24px;
// font-weight: 800;
// color: #F49842;
// font-family: Inter, sans-serif;
// padding-left: 10%;
// padding-bottom: 10%;
// `
// import SugFollow from "../comps/Suggested";

export default function SuggestedFollowingBox ({
    header="Following Suggestion", 
}){

  const db = getFirestore();

  const [users, setUsers] = useState([]);

const GetFollowers = async() => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const dbusers = [];
  querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      dbusers.push({...doc.data(), id:doc.id});
      setUsers([...dbusers]);
  });
}

  useEffect ( () => {
GetFollowers();
  },[]);
// shows the data collection "users"

return(
        <BigBox>
        <FollowingTitle>{header}</FollowingTitle>
        {users.map((o=><Follower
        name={o.username} handle={o.username}/>))}
    </BigBox>
    )
}