import React, { useEffect, useState } from 'react';
import Post from './Post';
import Tweetbox from './TweetBox';
import db from '../newfirebase/firebase.config';
import styled from 'styled-components';

const HomeFeed = styled.div`
font-size: 30px;
font-weight: 500;
color: #F49842;
margin: 30px;`


const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))

    }, []);
    return (
        <div>
            <div>
                <HomeFeed>Homefeed</HomeFeed>
            </div>

            <Tweetbox />
            <div>
                {posts.map(post => (
                    <Post
                        key={post.text}
                        handle={post.handle}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        image={post.image}
                    />

                ))}
            </div>


        </div>
    );
}

export default Feed;