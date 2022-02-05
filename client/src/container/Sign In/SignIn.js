import React from 'react'

import SignIn from "../../component/Sign In/SignIn";
import { connect } from 'react-redux';

function SignInForm() {
    return (
        <div>
            <SignIn />            
        </div>
    )
}

const mapStateToProps = function mapStateToProps(state) {
    return {
      isSigningIn: state.auth.isSigningIn,
      signInError: state.auth.signInError,
      user: state.auth.user,
    };
  };
  
  export default connect(mapStateToProps, { load, signin, enableAuthModal })(SignInForm);



