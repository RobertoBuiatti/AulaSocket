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
    console.log(`um usuario com o id ${socket.id} conectou no servidor` )
    //Atribui um nickname padrao para cada cliente
    socket.data.Nickname = socket.id.substring(0, 5) // pega as 5 primeiras palavras da string do id
    

    socket.on('disconnect', () => {
        console.log(`usuário ${socket.id} desconectou`)
    })
    socket.on('chat', (msg) => {
        console.log(`${socket.id} escreveu: ${msg}`)
        io.emit('chat', msg, socket.data.Nickname)
    })
    socket.on('trocaNickname', (nickname) => {
        socket.data.Nickname = nickname
    })
    
})

server.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})
