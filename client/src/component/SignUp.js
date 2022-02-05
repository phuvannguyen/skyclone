
import GoogleIcon from '@mui/icons-material/Google'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function SignUp() {
    return (
        <div>
            <div className="icon">
                <div className="social">
                    <div className="google">
                        <GoogleIcon />          

                    </div>
                    <div className="github">
                        <GitHubIcon />
                    </div>
                </div>
                <div className="form">
                    <form action="POST">
                        <input type="text" name="username"  placeholder="User name"/>
                        <input type="email" name="email" placeholder="User name"/>
                        <input type="password" name="password"  placeholder="Pass word"/>
                        <input type="password" name="check_password"  />
                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
                
            </div>    
        </div>
    )
}