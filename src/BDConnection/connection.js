const mongoose = require('mongoose')
require('dotenv').config();
let env = process.env;

//url
mongoose.connect("mongodb://localhost:27017/proyectoPruebas")

mongoose.connection.on('conected', () => {
    console.log('conectado')
})

mongoose.connection.on('error',error=>{
    console.log(`El error de conexión es: ${error}`)
})