import styled from "styled-components"
import { BigBox } from "../comps/ProfileBio"

// const FollowingBoxCont = styled.div`
// width: 360px;
// height: 500px;
// border: 2px solid #F49842;
// padding-top: 50px;
// border-radius: 10px;
// background-color: white;
// `

// const FollowingTitle = styled.div`
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

export const FollowingTitle = styled.h2`
color: #F49842;
font-family: Inter, sans-serif;
margin:0;
`
import Follower from "../comps/Followers";


export default function FollowingBox ({header="Following"}){ 

    return(
        <BigBox>
            <FollowingTitle>{header}</FollowingTitle>
        <Follower
            name="test1"
            handle="@test1"
            button="test1"
            />
            <Follower />
            <Follower />

        </BigBox>
    )
}

