

import React, { forwardRef, useState } from 'react';
import { ChatBubbleOutline, DataObjectOutlined, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@mui/icons-material';
import styled from 'styled-components';
import db from '../newfirebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';


const ReportUserButton = styled.div`
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


const Post = forwardRef(({ username, handle, verified, text, image, key }, ref) => {

    const [report, setReport] = useState("false");

    const reportTweet = e => {
        setReport("true")
        db.collection("reported").doc(username.uid,{
            handle: handle,
            username: username,
            text: text,
            image: image,
            uid:uid,
        })
        db.collection("posts").doc(username.uid).delete()
           
    }


    return (
        <div ref={ref}>
            <div style={{ display: 'flex', border: '2px solid #F49842', backgroundColor: 'white', borderRadius: 10, padding: 50, margin: 20 }}>
                <img style={{ marginRight: 10, width: 50, height: 50 }} src='avatar.png' />
                <div>
                    <div>
                        <div>
                            <h3>
                                {username}{" "}
                                <span>
                                    {verified && <VerifiedUser />}
                                    <ReportUserButton onClick={reportTweet}>report</ReportUserButton>
                                    <div style={{ fontSize: 12, color: '#777777', fontWeight: 200, }} >@{handle}</div>
                                </span>
                            </h3>
                        </div>
                        <div>
                            <p>{key}</p>
                        </div>
                    </div>
                    <img
                        src={image}
                        alt=""
                    />
                    
                    <div>
                        <ChatBubbleOutline fontSize='small' />
                        <Repeat fontSize='small' />
                        <FavoriteBorder fontSize='small' />
                        <Publish fontSize='small' />
                    </div>
                </div>
            </div>
        </div>
    );
})

export default Post;