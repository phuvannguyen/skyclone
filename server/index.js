import express from "express"
import http from "http"


const app = express()

const server = http.createServer(app)


app.get("/", (req, res) => {
    res.send("Hello world. This is Phuhandsome")
    
})

server.listen(8080, () => {
    console.log("Hi 4000")
})