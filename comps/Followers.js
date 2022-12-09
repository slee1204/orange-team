import styled from "styled-components"

const FollowedUserBox = styled.div`
padding: 15px 10px;
border: 1px solid #E7E7E7;
margin: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
flex-grow:1;
width: 100%;
`

const FollowingUsers = styled.div`
display: flex;
flex-direction: row;

`

const FollowedUserPic = styled.div`
width: 35px;
height: 35px;
background: black;
border-radius: 50%;
`
const FollowedUserDetails = styled.div`
display: flex;
flex-direction: column;

`

const FollowedDisplay = styled.div`
font-size: 16px;
font-weight: 400;
color: #F49842;
padding-left: 10px;
padding-right: 20px;
font-family: Inter, sans-serif;
`
const FollowedHandle = styled.div`
padding-left: 10px;
font-size: 12px;
color: #7B7B7B;
font-weight: 200;
font-family: Inter, sans-serif;
`
const FollowedUserButton = styled.div`
color: white;
background-color: #F49842;
border-radius: 10px;
border: #F49842;
width: 80px;
padding: 10px;
text-align: center;
font-family: Inter, sans-serif;
font-size: 12px;
`


export default function Follower ({
    name="brickabrak woo",
    handle="@brickabrak",
    button="Unfollow"

}){
    return (
        <FollowedUserBox>
           <FollowingUsers>
                <FollowedUserPic />
                <FollowedUserDetails>
                    <FollowedDisplay>{name}</FollowedDisplay>
                    <FollowedHandle>{handle}</FollowedHandle>
                </FollowedUserDetails>
            </FollowingUsers>
            <FollowedUserButton>{button}</FollowedUserButton>
            
        </FollowedUserBox>
    )
}

