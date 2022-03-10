import "./forgetpass.css" 

export default function ForgetPass() {
    return (
        <div>
            <div className="forget">
                <h1>Forgot Password</h1>                
                <div className="form">
                    <form action="POST">                        
                        <input type="email" name="email" placeholder="email"/>                        
                    </form>
                    <h3>You have a account? <a href="/">Submit</a></h3>
                </div>                
            </div>    
        </div>
    )
}