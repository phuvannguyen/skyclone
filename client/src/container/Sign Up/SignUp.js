import React, { useState, useRef } from 'react'

import SignUp from "../../component/Sign Up/SignUp";
import { connect } from 'react-redux';
import {register} from "../../Action/index"

function SignUpForm({isLoggedIn, content, user, register}) {
    

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [successful, setSuccessful] = useState(false);
    


    const handleChangeName = (event) => {        
        setName(event.target.value)
    };

    const handleChangePass = (event) => {        
        setPass(event.target.value)
    }

    const handleChangeEmail = (event) => {        
        setEmail(event.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            register(username, email, password)
            .then(() => {
              props.history.push("/");
              window.location.reload();
            })
            .catch(() => {
                setSuccessful(false);
            });
        } else {
            setSuccessful(false);
        }
      };
      if (!isLoggedIn) {
        alert(user, content);
        return <Redirect to="/" />;
      }   
    
    return (
        <div>
            <SignUp props={{handleSubmit, handleChangeEmail, handleChangeName, handleChangePass, username, password, email}}/>            
        </div>
    )
}

const mapStateToProps = function mapStateToProps(state) {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      content: state.messages.content,
      user: state.auth.user,
    };
  };
 
  
  export default connect(mapStateToProps, {register})(SignInForm);