import db from '../newfirebase/firebase.config';
import React, { useState } from 'react';


const Tweetbox = () => {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")
    const [tweetUsername, setTweetUsername] = useState("")
    const [handleName, setHandleName] = useState("")

    const sendTweet = e => {
        e.preventDefault()
        db.collection("posts").add({
            handle: handleName,
            username: tweetUsername,
            verified: true,
            text: tweetMessage,
            image: tweetImage,

        })

        setTweetMessage("")
        setTweetImage("")
        setTweetUsername("")
        setHandleName("")
    }

    return (
        <div>
            <div style={{ backgroundColor: '#FFE2A9', borderRadius: 10, padding: 20, margin: 20 }}>
                <form action="">
                    <div>
                        <div style={{ fontSize: 15, paddingBottom: 10, fontWeight: 300 }}>What's your Handle?</div>
                        <input style={{ borderRadius: 10, padding: 10 }}
                            onChange={e => setHandleName(e.target.value)}
                            value={handleName}
                            placeholder="@handle"
                            type="" />
                        <div style={{ fontSize: 15, paddingBottom: 10, paddingTop: 30, fontWeight: 300 }}>What's your name?</div>
                        <input style={{ borderRadius: 10, padding: 10 }}
                            onChange={e => setTweetUsername(e.target.value)}
                            value={tweetUsername}
                            placeholder="name"
                            type="" />
                    </div>

                    <div>
                        <div style={{ fontSize: 15, paddingBottom: 10, paddingTop: 30, fontWeight: 300 }}>Share your thoughts!</div>
                        <div style={{ display: 'flex' }}><img style={{ marginRight: 10, width: 50, height: 50 }} src="avatar.png" />
                            <input style={{ color: 'black', borderRadius: 10, width: 400, height: 60 }}
                                onChange={e => setTweetMessage(e.target.value)}
                                value={tweetMessage}
                                placeholder="Orange you glad you're tweeting..."
                                type="" />
                        </div>
                    </div>

                    <div style={{ fontSize: 15, paddingBottom: 10, paddingTop: 30, fontWeight: 300 }}>Add Image?</div>
                    <input style={{ borderRadius: 10, padding: 10 }}
                        onChange={e => setTweetImage(e.target.value)}
                        value={tweetImage}
                        placeholder="Image URL"
                        type="" />

                    <button style={{ float: 'right', backgroundColor: '#F49842', color: 'white', fontSize: 16, borderRadius: 10, border: 'none', padding: 15 }}
                        onClick={sendTweet}
                        type="submit">
                        Tweet
                    </button>

                </form>
            </div>
        </div >
    );
}

export default Tweetbox;