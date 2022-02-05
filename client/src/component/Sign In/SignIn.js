import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import "./SignIn.css"

export default function SignIn() {
    const [username, setName] = useState("");
    const [password, setPass] = useState("");


    const handleChangeName = (event) => {
        // setName(event.target.value)
        setName(event.target.value)
    };

    const handleChangePass = (event) => {
        // setPass(event.target.value)
        setPass(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('A name was submitted: ' + username +"pass:" + password);


    }
    return (
        <div>
            <div className="login">
                <LockIcon />                
                <div className="form">                    
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" name="username"  placeholder="User name" 
                                value = {username} onChange={(e) => handleChangeName(e)}/>                        
                        <input type="password" name="password"  placeholder="Password" value = {password} onChange={(e) => handleChangePass(e)}/>
                        <input type="submit" value="Sign In" />                        
                    </form>
                </div>
                
            </div>    
        </div>
    )
}