import express from "express"
import mongoose from "mongoose"
import http from "http"
import Chat from "./models/chat.js"
import Room from "./models/room.js"
import message from "./models/message.js"
import { Server } from "socket.io"
import router from "./Router/index.js"
import bodyParser from "body-parser"
import dotenv from 'dotenv'



//app config
const app = express();
dotenv.config();
const port = process.env.PORT

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const server = http.createServer(app)

//DB config
const url = "mongodb+srv://phu1994:6298327@cluster0.rpsig.mongodb.net/message?retryWrites=true"

try {
    await mongoose.connect(url);
  } catch (error) {
    console.log(error);
  }

//router
app.use(router)

//config socket

const io = new Server(server, { cors: {
  origin: "http://localhost:3000/",  
  credentials: true}});

io.on("connection", (socket) => {
  socket.on("hello", (arg) => {
    try {
      console.log("Connected with socket:", arg); // world
      
    } catch (error) {
      console.log(error)
      
    }
    
  });
});





server.listen(port, () => {
    console.log("Hi 8080")
})