import React from 'react'
import "./Message.css"

function Message() {
    return (
        <div>            
            <p className="chat_message">
                <span className="username">Thanh Nguyen</span>
                    This is the first message
                <span className="timestamp">{new Date().toUTCString()}</span>
            </p>
            <p className="chat_message chat_receiver">
                <span className="username">Phu Nguyen</span>
                    This is the second message
                <span className="timestamp">{new Date().toUTCString()}</span>
            </p>
        </div>
    )
}

export default Message
