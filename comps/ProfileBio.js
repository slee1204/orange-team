import styled from "styled-components"

const ProfileBigBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 360px;
height: 500px;
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
padding: 5%;
`

const ProfileGreyBox = styled.div`
padding: 40px 40px 40px 40px;
background-color: #F2F2F2;
border-radius: 10px;
width: 200px;
`

const ProfileUserPic = styled.div`
width: 100px;
height: 100px;
background: black;
border-radius: 50%;
`
const DisplayName = styled.div`
font-size: 36px;
font-weight: 800;
color: #F49842;
font-family: Inter, sans-serif;
`

const HandleName = styled.div`
font-size: 20px;
font-weight: 200;
color: #7B7B7B;
font-family: Inter, sans-serif;
`

const ProfileBox = () => (
    <ProfileBigBox>
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
    </ProfileBigBox>)

export default ProfileBox;