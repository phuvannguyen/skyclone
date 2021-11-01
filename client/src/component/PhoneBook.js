import React from 'react'
import "./MessageBook.css"
import Avatar from '@mui/material/Avatar'
 

function PhoneBook() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerinfo">
                    <h3>Thanh Nguyen</h3>                    
                </div>
            </div>        
        </div>
    )
}

export default PhoneBook
