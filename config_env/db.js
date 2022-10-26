const mongoose = require('mongoose')

// const uri = 'mongodb+srv://Sindy2004:Gomez@_890@cluster0.ax6wfxf.mongodb.net/bootcamps-sena?retryWrites=true&w=majority'

const uri = 'mongodb://localhost:27017/bootcamps-sena'
//componente de conexion BD
//tipo: funcional

const connectDB = async() => {
    const conn = await mongoose.connect(uri , { 
        useNewUrlParser : true,
        useUnifiedTopology: true
    })

    console.log(`MongoDB Conectado: ${conn.connection.host}`)
}

connectDB()