import styled from "styled-components"

export const BigBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: fit-content;
padding: 30px 10px;
border: 2px solid #F49842;
border-radius: 10px;
background-color: white;
`;

const ProfileBio = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: Inter, sans-serif;
color: black;
`

const ProfileNameBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ProfileGreyBox = styled.div`
margin-top: 10px;
padding: 40px 40px 40px 40px;
background-color: #F2F2F2;
border-radius: 10px;
width: 200px;
`

const ProfileUserPic = styled.div`
width: 80px;
height: 80px;
background: black;
border-radius: 50%;
`
const DisplayName = styled.h2`
color: #F49842;
font-family: Inter, sans-serif;

`

const HandleName = styled.span`
font-size: 18px;
font-weight: 200;
color: #7B7B7B;
font-family: Inter, sans-serif;
`

const ProfileBox = () => (
    <BigBox>
        <ProfileUserPic></ProfileUserPic>
        <ProfileNameBox>
            <DisplayName>orangeteam</DisplayName>
            <HandleName> @orangeteam</HandleName>
        </ProfileNameBox>
        <ProfileGreyBox>
            <ProfileBio>
                Hello, I'm just an orange. yay
                Hello, I'm just an orange. yay
                Hello, I'm just an orange. yay
            </ProfileBio>
        </ProfileGreyBox>
    </BigBox>)

export default ProfileBox;