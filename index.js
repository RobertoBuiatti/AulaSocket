const express = require('express')
const http = require('http')
const path = require('path')
const app = express()
const server = http.createServer(app)


app.get('/', (req, res)=>{
    return `<h1>Hello Word</h1>`
})

server.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})
