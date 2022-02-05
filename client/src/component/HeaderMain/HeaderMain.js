import React from 'react'
import "./HeaderMain.css"
import {Avatar, IconButton} from '@mui/material/'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';


function HeaderMain() {
    return (
        <div className="headerMain">
            <div className="avatar">
                <Avatar />
                <div className="avatar_info">
                    <h3>Thanh Nguyen</h3>
                    <p>{Date().toLocaleString()}</p>                    
                </div>
            </div>
            <div className="icon">
                <IconButton>
                    <SearchOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <IconButton>
                    <PeopleOutlineIcon />
                </IconButton>  
            </div>
            

            
        </div>
    )
}

export default HeaderMain
