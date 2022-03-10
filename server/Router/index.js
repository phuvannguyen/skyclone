import express, { Router } from "express"
import Users from "../models/user.js"
import {authenToken} from "../middleware/auth.js"
import { signin, signup } from "../controllers/auth.js"
// import {findAuthentication} from "../middleware/auth"

const router = express.Router()

router.get("/", authenToken, (req, res) => {
      
    res.send("Hello world. This is Phuhandsome")
    
})

router.get("/users", (req, res) => {  
    Users.find((err, data ) => {    
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(201).send(data)
  
      }
    })
  
  
  })
router.post("/login", signin)
router.post("/signup", signup)




export default router