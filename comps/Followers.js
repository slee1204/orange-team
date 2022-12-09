import styled from "styled-components"

const FollowedUserBox = styled.div`
padding: 20px 10px 20px 22px;
border: 1px solid #E7E7E7;
`

const FollowingUsers = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
`

const FollowedUserPic = styled.div`
width: 50px;
height: 50px;
background: black;
border-radius: 50%;
`
const FollowedUserDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`

const FollowedDisplay = styled.div`
font-size: 20px;
font-weight: 400;
color: #F49842;
padding-left: 10px;
padding-right: 40px;
font-family: Inter, sans-serif;
`
const FollowedHandle = styled.div`
padding-left: 10px;
font-size: 20px;
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
`


const Follower = () => (
    <>
        <FollowedUserBox>
            <FollowingUsers>
                <FollowedUserPic />
                <FollowedUserDetails>
                    <FollowedDisplay>brickabrak woo</FollowedDisplay>
                    <FollowedHandle>@brickabrak</FollowedHandle>
                </FollowedUserDetails>
                <FollowedUserButton>Unfollow</FollowedUserButton>
            </FollowingUsers>
        </FollowedUserBox>
    </>
)

export default Follower;