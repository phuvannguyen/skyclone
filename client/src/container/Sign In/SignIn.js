import React, { useState, useRef } from 'react'

import SignIn from "../../component/Sign In/SignIn";
import { connect } from 'react-redux';
import {login} from "../../Action/index"

function SignInForm({isLoggedIn, content, user, login}) {
    

    const [username, setName] = useState("");
    const [password, setPass] = useState("");
    const [loading, setLoading] = useState(false)    


    const handleChangeName = (event) => {        
        setName(event.target.value)
    };

    const handleChangePass = (event) => {        
        setPass(event.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
          login(username, password)
            .then(() => {
              alert(user, content);
              props.history.push(user);
              window.location.reload();
            })
            .catch(() => {
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      };
      if (isLoggedIn) {
        alert(user, content);
        return <Redirect to={user} />;
      }   
    
    return (
        <div>
            <SignIn props={{handleSubmit, handleChangeName, handleChangePass, username, password}}/>            
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
 
  
  export default connect(mapStateToProps, {login})(SignInForm);



