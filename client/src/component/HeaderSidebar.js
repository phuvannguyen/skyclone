import React from 'react'
import "./HeaderSidebar.css"
import {Avatar, IconButton } from '@mui/material/'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import DialpadOutlinedIcon from '@mui/icons-material/DialpadOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';







function HeaderSidebar() {
    return (
        <div>
            <div className="user_info">
                <div className="avatar">
                    <Avatar src={"https://i.pravatar.cc/150?u=fake@pravatar.com"}/>
                    <div className="name_status">
                        <h2>Phu Nguyen</h2>
                        <p>In Meeting</p>
                    </div>
                </div>                
                <MoreHorizIcon />
            </div>
            <div className="search">
                <div className="search_container">
                    <SearchOutlinedIcon />               
                    <form action="">                    
                        <input placeholder="People, Group, Messages" type="text"/>                    
                    </form>
                </div>                
                <DialpadOutlinedIcon />
            </div>
            <div className="icon">
                <div className="chat">
                    <IconButton>
                        <ChatBubbleOutlineOutlinedIcon />
                    </IconButton>                    
                    <p>Chats</p>
                </div>
                <div className="contacts">
                    <IconButton>
                        <MenuBookOutlinedIcon />
                    </IconButton>                    
                    <p>Contacts</p>
                </div>
                <div className="Notifications">
                    <IconButton>
                        <NotificationsNoneRoundedIcon />
                    </IconButton>             
                    
                    <p>Notifications</p>
                </div>
            </div>
        
        </div>
    )
}

export default HeaderSidebar
