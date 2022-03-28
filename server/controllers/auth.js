import Users from "../models/user.js"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import bcrypt from "bcrypt"
dotenv.config()
 


// Sign in using email and password.
export const signin = async(req, res, next) => {
    const { username, password } = req.body;
    console.log("red.body:", req.body);
    console.log("password:", password);     
     

    // Ensure username was submitted
    if (!username.trim()) {
      res.status(400).send({ message: "Must provide username!" });
      return;      

    } 
    else if  (!password.trim()) {
      res.status(400).send({ message: "Must provide password!" });
      return   
        
    };    
    
    await Users.findOne({username}).exec((err, user) =>  {
      if (err) {
        res.status(400).send({ message: err });
        return 
      };

      if (!user) {
        res.status(400).send({ message: "Must provide password!" });
        return
      };     
      
      //compard password from user and database.
      const passwordIsValid = bcrypt.compareSync(
        password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

    });
    

    const token = jwt.sign({username: username, password: password}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
      if (err) {
        res.status(400).send({ message: err });
        ReadableStreamDefaultController
      }
      res.json({token: token})
    });
    
        
    // res.render("http://localhost:3000/" + {username})     
 
    
  };

  
export const signup = async(req, res) => {
  const { username, email, password } = req.body;    
   

  // Ensure username was submitted
  if (!username.trim()) {    
    res.status(400).send({ message: "Must provide username!" });
    return;       

  } 
  else if  (!password.trim()) {
    res.status(400).send({ message: "must provide password" });
    return;          
      
  };

  //hash password
  const hashPassword =  bcrypt.hashSync(password, 8)


  const isUser = await Users.findOne({username}).exec();
  const isEmail = await Users.findOne({email}).exec();
  if (isUser) {
    res.status(400).send({ message: "Email was exited" });
    return;
  };

  if (isEmail) {
    res.status(400).send({ message: "Email was exited" });
    return;
  };

  //Save username, password and email to DB data
  const user = new Users({
    username, email, hashPassword
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "User was registered successfully!" });
  });
  
}

export const signout = async(req, res) => {
  res.send({message: "User was outed"});
  return

}
            

      


   