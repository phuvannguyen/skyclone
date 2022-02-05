import Users from "../models/user.js"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()
 


// Sign in using email and password.
export const signin = async(req, res, next) => {
    const { username, password } = req.body;    
     

    // Ensure username was submitted
    if (!username.trim()) {
      throw new Error("must provide username")       

    } 
    else if  (!password.trim()) {
      throw new Error("must provide password")       
        
    };


    const isUser = await Users.findOne({username, password}).exec();
    if (!isUser) {
      throw new Error("Usernames or password was wrong")
    };

    const token = jwt.sign({username: username, password: password}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
      console.log(err);
      res.json({id: token})
    });
     
 
    
  };

  
export const signup = async(req, res, next) => {
  const { username, email, password } = req.body;    
   

  // Ensure username was submitted
  if (!username.trim()) {
    throw new Error("must provide username")       

  } 
  else if  (!password.trim()) {
    throw new Error("must provide password")       
      
  };


  const isUser = await Users.findOne({username, password}).exec();
  if (!isUser) {
    throw new Error("Usernames or password was wrong")
  };

  const token = jwt.sign({username: username, password: password}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {    
    res.json({id: token})
  });
  res.render("http://localhost:3000/" + {username}) 

  
}


            

      


   