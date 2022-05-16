
const { request, response } = require('express');
const express = require('express')
const processDelete = require('./processors/processDelete.js')

// const http = require('http')

// const server = http.createServer((requiest, response) =>{
//     response.writeHead(200, {'Content-Type': 'application/json'})
//     const body = {mensaje: 'Hola Mundo'}
//     response.end(JSON.stringify(body))
// })

//server.listen(5000)

const app = express()

app.get('/', (request,response)=>{
    response.writeHead(200, {'Content-Type': 'application/json'})
    const body = {mensaje: 'Hola Mundo 2'}
    response.end(JSON.stringify(body))
})

app.post('/',(request, response)=>{
    console.log(request);
    response.end
})

app.delete('/', processDelete)

app.listen(5000,()=>{
    console.log('Ejecutando servidor de pruebas');
})