import "./MessagesInput.css"
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined'
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined'
import FilePresentIcon from '@mui/icons-material/FilePresent'
import CreateIcon from '@mui/icons-material/Create';

function MessagesInput() {
    return (
        <div className="input">
                <div className="input_container">
                    <SentimentSatisfiedIcon />               
                    <form action="">                    
                        <input placeholder="Type a message" type="text"/>
                        <button className="send" type="submit">Send message</button>                    
                    </form>
                    <div className="pencil">
                        <CreateIcon />
                    </div>
                    
                </div>
                <div className="icon">
                    <FilePresentIcon />
                    <ContactMailOutlinedIcon />
                    <MicNoneOutlinedIcon />
                </div>                
                
            </div>
    )
}

export default MessagesInput
