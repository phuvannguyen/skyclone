import "./Auth.css"
import React from "react"
import SignIn from "../Sign In/SignIn"
import SignUp from "../SignUp"
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
                    </Switch>
                </div>
                <div className="switch">
                    <ul>
                        <li>
                            <Link to="/" className="link">Sign In</Link>
                        </li>
                        <li>
                            <Link to="/signup" className="link">Sign Up</Link>
                        </li>          
                    </ul>
                </div>
                </div>           
            
        
        </Router>
        
    

    )
}