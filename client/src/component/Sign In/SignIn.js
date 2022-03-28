import React, {useRef} from 'react';
import GoogleIcon from '@mui/icons-material/Google'
import GitHubIcon from '@mui/icons-material/GitHub'

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import "./SignIn.css"

const required = value => {
    if (!value) {
        return (<div className='alert alert-danger'>
            This field is required!
        </div>)
    }
}


export default function SignIn({handleSubmit, handleChangeName, handleChangePass, username, password}) {
    const form = useRef();
    const checkBtn = useRef();       

    return (
        <div className="login">           

                <div className="form">
                    <h1>Sign In</h1>                    
                    <Form onSubmit={handleSubmit} ref={form}>
                        <Input type="text" name="username"  placeholder="User name" 
                                value = {username} onChange={handleChangeName} validations={[required]}/>                        
                        <Input type="password" name="password"  placeholder="Password" value = {password} 
                        onChange={handleChangePass} validations={[required]}/>
                        <a href="/forgot">Forget password?</a>
                        <label>
                            <input type="checkbox" /> 
                            Remember
                        </label>
                        <button type="submit">Sign In</button>
                        <CheckButton style={{ display: "none" }} ref={checkBtn} />                        
                    </Form>
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