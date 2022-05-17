
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

const app = express() //primero obtenemos un objeto llamado "app"

app.use('/', express.static('html')) //devuelve una ruta y manejadores de esas rutas

app.get('/', (request,response, next)=>{
    response.writeHead(200, {'Content-Type': 'application/json'})
    const body = {mensaje: 'Hola Mundo 2'}
    response.end(JSON.stringify(body))
})

app.post('/',(request, response)=>{
    console.log(request);
    response.end
})

app.delete('/', processDelete)

//............... para el manejo de productos:

app.post('/productos', creadorProductos)
app.delete('/productos', borradorProductos)
app.get('/productos', listadorProductos)
//................

app.listen(5000,()=>{
    console.log('Ejecutando servidor de pruebas');
})