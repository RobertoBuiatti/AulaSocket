const express = require('express')
const http = require('http')
const path = require('path')
const { Server} = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = new Server(server)


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

io.on('connection', (socket) => {
    console.log('a new client connected')
})

server.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})
