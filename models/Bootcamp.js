const mongoose = require('mongoose')

//Modelo de bootcamps
const BootcampsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [
            true,
            "Por favor, ingresa el nombre"
        ],
        unique: true,
        maxlenght: [
            30,
            "No se admiten bootcamps > 30 "
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "Por favor, ingresa la descripcion"
        ],
        maxlenght: [
            500,
            "No se admiten descripciones > 500 "
        ]
    },

    phone: {
        type: String,
        maxlenght: [
            20,
            "telefonos no mayores a 20 "
        ]
    },

    email:{
        type: String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Por favor, ingrese email valido'
        ]
    },

    averageCost: Number,
    averageRating: {
        type: Number,
        min:[1, 'Calificacion minima: 1'],
        max:[10, 'Calificacion maxima de 10']
    }
})

module.exports = mongoose.model('bootcamp' , BootcampsSchema)