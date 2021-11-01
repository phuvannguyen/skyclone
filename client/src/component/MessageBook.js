import Avatar from '@mui/material/Avatar'
import "./MessageBook.css"

function MessageBook() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerinfo">
                    <h3>Thanh Nguyen</h3>
                    <p>Anh Phú đẹp trai lắm</p>
                </div>
            </div>        
        </div>
    )
}

export default MessageBook
