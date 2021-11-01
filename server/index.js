import express from "express"
import mongoose from "mongoose"
import http from "http"

//app config
const app = express()
const port = process.env.PORT || 8080

const server = http.createServer(app)

//DB config
try {
    await mongoose.connect('mongodb+srv://phu1994:6298327@cluster0.rpsig.mongodb.net/message?retryWrites=true&w=majorit');
  } catch (error) {
    console.log(error);
  }


app.get("/", (req, res) => {
    res.send("Hello world. This is Phuhandsome")
    
})

server.listen(port, () => {
    console.log("Hi 8080")
})