import "./Auth.css"
import React from "react"
import SignIn from "../Sign In/SignIn"
import SignUp from "../SignUp/SignUp"
import ForgetPass from "../Forget Passs/forgetpass"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


export default function Auth() {
    return (
        <Router>
            <div className="authentication">
                <div className="authen">                                
                    <Switch>
                        <Route exact path="/">
                            <SignIn />
                        </Route>
                        <Route path="/signup">
                            <SignUp />
                        </Route>
                        <Route path="/forgot">
                            <ForgetPass />
                        </Route>                
                    </Switch>
                </div>                
            </div>           
            
        
        </Router>
        
    

    )
}