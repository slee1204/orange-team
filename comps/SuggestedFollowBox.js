import styled from "styled-components"

const SugFollowBoxCont = styled.div`
width: 360px;
height: 500px;
border: 2px solid #F49842;
padding-top: 50px;
border-radius: 10px;
background-color: white;
`

const SugFollowTitle = styled.div`
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
import SugFollow from "../comps/Suggested";

const SuggestedFollowingBox = () => (
    <>
        <SugFollowBoxCont>
            <SugFollowTitle>Follow Suggestions</SugFollowTitle>
            <SugFollow />
            <SugFollow />
            <SugFollow />
        </SugFollowBoxCont>
    </>
)

export default SuggestedFollowingBox;