import styled from "styled-components"

const FollowingBoxCont = styled.div`
width: 360px;
height: 500px;
border: 2px solid #F49842;
padding-top: 50px;
border-radius: 10px;
background-color: white;
`

const FollowingTitle = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
font-size: 24px;
font-weight: 800;
color: #F49842;
font-family: Inter, sans-serif;
padding-left: 10%;
padding-bottom: 10%;
`
import Follower from "../comps/Followers";

const FollowingBox = () => (
    <>
        <FollowingBoxCont>
            <FollowingTitle>Following</FollowingTitle>
            <Follower />
            <Follower />
            <Follower />

        </FollowingBoxCont>
    </>
)

export default FollowingBox;