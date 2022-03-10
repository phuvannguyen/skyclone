import "./SignUp.css" 


export default function SignUp() {
    return (
        <div>
            <div className="signup">                                
                <div className="form">
                    <h1>Sign Up</h1>
                    <form action="POST">
                        <input type="text" name="username"  placeholder="User name"/>
                        <input type="email" name="email" placeholder="email"/>
                        <input type="password" name="password"  placeholder="Password"/>
                        <input type="password" name="check_password" placeholder="Confirm password"  />                        
                        <input type="submit" value="Sign Up" />
                    </form>
                    <h3>You have a account? <a href="/">Sign In</a></h3>
                </div>                
            </div>    
        </div>
    )
}