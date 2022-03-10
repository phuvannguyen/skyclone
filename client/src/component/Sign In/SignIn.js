import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google'
import GitHubIcon from '@mui/icons-material/GitHub'
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
        <div className="login">                                            
                <div className="form">
                    <h1>Sign In</h1>                    
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" name="username"  placeholder="User name" 
                                value = {username} onChange={(e) => handleChangeName(e)}/>                        
                        <input type="password" name="password"  placeholder="Password" value = {password} onChange={(e) => handleChangePass(e)}/>
                        <a href="/forgot">Forget password?</a>
                        <label>
                            <input type="checkbox" /> 
                            Remember
                        </label>
                        <input type="submit" value="Sign In" />                        
                    </form>
                </div>
                <h3>Don't have a account? <a href="/signup">Sign Up</a></h3>
                <h3> Or login with </h3>
                <div className="social">
                    <div className="google">
                        <GoogleIcon />         

                    </div>
                    <div className="github">
                        <GitHubIcon />
                    </div>
                </div>
                
               
        </div>
    )
}