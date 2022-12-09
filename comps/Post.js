

import React, { forwardRef } from 'react';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@mui/icons-material';

const Post = forwardRef(({ username, handle, verified, text, image }, ref) => {

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

                                    <div style={{ fontSize: 12, color: '#777777', fontWeight: 200, }} >@{handle}</div>
                                </span>
                            </h3>
                        </div>
                        <div>
                            <p>{text}</p>
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