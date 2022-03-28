 
import jwt  from "jsonwebtoken";


// Login Required middleware.
export const authenToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];   
    const token = authHeader && authHeader.split(" ")[1];
    
    if (token == null) {
      
      return res.status(403).send({ message: "No token provided!" });
    };

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
      if (err) {
        console.log("THis is token", token)
        res.status("403")        
      };
      req.user = req.body;      
      next() 

    })
  };