import styled from "styled-components"

const SugFollowUserBox = styled.div`
padding: 20px 10px 20px 22px;
border: 1px solid #E7E7E7;
`

const SugFollowUsers = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
`

const SugFollowUserPic = styled.div`
width: 50px;
height: 50px;
background: black;
border-radius: 50%;
`
const SugFollowUserDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`

const SugFollowDisplay = styled.div`
font-size: 20px;
font-weight: 400;
color: #F49842;
padding-left: 10px;
padding-right: 40px;
font-family: Inter, sans-serif;
`
const SugFollowHandle = styled.div`
padding-left: 10px;
font-size: 20px;
color: #7B7B7B;
font-weight: 200;
font-family: Inter, sans-serif;
`
const SugFollowUserButton = styled.div`
color: white;
background-color: #F49842;
border-radius: 10px;
border: #F49842;
width: 80px;
padding: 10px;
text-align: center;
font-family: Inter, sans-serif;
`


const SugFollow = () => (
    <>
        <SugFollowUserBox>
            <SugFollowUsers>
                <SugFollowUserPic />
                <SugFollowUserDetails>
                    <SugFollowDisplay>brickabrak woo</SugFollowDisplay>
                    <SugFollowHandle>@brickabrak</SugFollowHandle>
                </SugFollowUserDetails>
                <SugFollowUserButton>Follow</SugFollowUserButton>
            </SugFollowUsers>
        </SugFollowUserBox>
    </>
)

export default SugFollow;