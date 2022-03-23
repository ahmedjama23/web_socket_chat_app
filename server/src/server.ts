import express from 'express'
import http from 'http'
import {Server} from 'socket.io'

const app = express();

const server = http.createServer(app);

const io = new Server(server, {cors: {origin: "http://localhost:5000"}})

io.on("connection",(socket) => {
    console.log("socket connected")
})

server.listen(5000,() => console.log("Server listening on port 5000"));
