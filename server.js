//1. Crear el objeto express 
const express = require('express')
//2.Citar las dependencias necesarias 
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')


const listEndpoint = require('express-list-endpoints')
//los componentes de ruta
const bootcampRoutes = require('./routes/BootcampRoutes')
const courseRoutes = require('./routes/CourseRoutes')
const reviewRoutes = require('./routes/ReviewRoutes')
const userRoutes = require('./routes/UserRoutes')

//3.establecer archivo de configuracion
dotenv.config({
    path:'./config/config.env'
})
console.log(process.env.PORT)
//Crear el objeto aplicacion
//para el servidor de desarrollo
const app = express()
//validemos 
//para recibir datos 
app.use(express.json())
//conexion 
connectDB()

//rutas de proyecto
app.use('/api/v1/bootcamp' , bootcampRoutes)
app.use('/api/v1/course', courseRoutes)
app.use('/api/v1/review', reviewRoutes)
app.use('/api/v1/users', userRoutes)

//endpoint de aplicacion 
app.get('/' , (request , response)=>{
    response
    .status(200)
    .json({
        "success": true,
        "data" : "request exitosa"
    })
    
})

//endpoints
//bootcamps


//imprimir la lista de endpoint
//vallidas del proyecto
console.log(listEndpoint(app))



//ejecutar el servidor de desarrollo 
//parametros
//puerto de escucha - listen
app.listen(process.env.PORT , ()=>{
    console.log(`servidor activo en puerto 5000` .bgMagenta.blue)
})