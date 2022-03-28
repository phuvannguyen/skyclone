import "./SignUp.css" 
import React, { useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  const validEmail = (value) => {
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  

    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      )

      } else if (!emailRe.test(value)) {
        <div className="alert alert-danger" role="alert">
          Email is invalid.
        </div>


      }   

    };

  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };

export default function SignUp({handleSubmit, handleChangeEmail, handleChangeName, handleChangePass, username, password, email}) {
    const form = useRef();
    const checkBtn = useRef();

    
  
    return (
        <div>
            <div className="signup">                                
                <div className="form">
                    <h1>Sign Up</h1>
                    <Form action="POST" onSubmit={handleSubmit} ref={form}>
                        <Input type="text" name="username"  placeholder="User name" 
                        value = {username} onChange={handleChangeName} validations={[required, vusername]}/>
                        <Input type="email" name="email" placeholder="email"  
                        value = {email} onChange={handleChangeEmail} validations={[validEmail, required]}/>
                        <Input type="password" name="password"  placeholder="Password" 
                        value = {password} onChange={handleChangePass} validations={[required, vpassword]}/>
                        <Input type="password" name="check_password" placeholder="Confirm password"  />                        
                        <button type="submit">Sign Up</button>
                        <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </Form>
                    <h3>You have a account? <a href="/">Sign In</a></h3>
                </div>                
            </div>    
        </div>
    )
}