

import React, { forwardRef } from 'react';
import db from '../newfirebase/firebase.config'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@mui/icons-material';

const Post = forwardRef(({ username, handle, verified, text, image }, ref) => {

    //could not make document id dynamic :(
    const reportTweet = e => {
        db.collection("posts").doc('j6jQgHqBMISKMuaB4Nk8').update({
            'text': 'reported'
        });
    }

    return (
        <div ref={ref}>
            <div style={{ display: 'flex', border: '2px solid #F49842', backgroundColor: 'white', color: '#333333', padding: 50, margin: 10 }}>
                <img style={{ marginRight: 10, width: 50, height: 50 }} src='avatar.png'/>
                <div style={{ width: '100%' }}>
                    <div>
                        <div>
                            <h3>
                                {username}{" "}
                                <span>
                                    {verified && <VerifiedUser />}
                                    <div style={{ fontSize: 12, color: '#777777', fontWeight: 200 }}>@{handle}</div>
                                </span>
                            </h3>
                        </div>
                        <div>
                            <p>{text}</p>
                        </div>
                    </div>
                    <img src={image} alt=""/>
                    <div style={{display: 'flex', alignItems: 'center', position:'relative', width: 'inherit'}}>
                        <div>
                            <ChatBubbleOutline fontSize='small' />
                            <Repeat fontSize='small' />
                            <FavoriteBorder fontSize='small' />
                            <Publish fontSize='small' />
                        </div>
                        <button 
                            style={{ 
                                position: 'absolute',
                                right: 0,
                                backgroundColor: '#F49842', 
                                color: 'white', fontSize: 16, 
                                borderRadius: 10, 
                                border: 'none', 
                                paddingTop: 8,
                                paddingBottom: 8,
                                paddingLeft: 25,
                                paddingRight: 25,
                            }}
                            type="Edit"
                            onClick={reportTweet}>
                            Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default Post;