//Dependencias:
//Objeto de conexión
const sequelize = require('../config/seq')
//Datatypes de Sequelize
const { DataTypes, ValidationError } = require('sequelize')
//El modelo
const BootcampModel = require('../models/Bootcamp')
const { response } = require('express')
//Crear la entidad
const Bootcamp = BootcampModel(sequelize, DataTypes)


//Listar todos los Bootcamps
exports.getAllBootcamps = async (req, res) => {

    //Traer los Bootcamps
    try {
        const bootcamps = await Bootcamp.findAll();
        //Response con los datos
        res
            .status(200)
            .json({
                "success": true,
                "data": bootcamps
            })
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor"
            })
    }
}
//Listar bootcamp por id
exports.getSingleBootcamp = async (req, res) => {
    try {
        const singleBootcamp = await Bootcamp.findByPk(req.params.id)
        if (singleBootcamp) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleBootcamp
                })
        } else {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Bootcamp no existente"
                })
        }

    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor"
            })
    }

}

//Actualizar bootcamps
exports.updateBootcamp = async (req, res) => {
    try {
        const singleBootcamp = await Bootcamp.findByPk(req.params.id);
        if (!singleBootcamp) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Bootcamp no existente"
                })
        } else {
            await Bootcamp.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const updateBootcamp = await Bootcamp.findByPk(req.params.id)
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updateBootcamp
                })
        }

    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor"
            })
        }
}

//Eliminar bootcamps
//Borrar bootcamps
exports.deleteBootcamp = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleBootcamp = await Bootcamp.findByPk(req.params.id);
        if (!SingleBootcamp) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Bootcamp no existente"
        })
        } else {
            await Bootcamp.destroy({
                where: {
                    id: req.params.id
                }
              });
            }
} catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": " Error de servidor desconocido"
        })
    }
    
}
//Crear nuevo bootcamp
exports.createBootcamp = async (req, res) => {
    try {
        const newBootcamp = await Bootcamp.create(req.body)
        res
            .status(200)
            .json({
                "success": true,
                "data": newBootcamp
            })
    } catch (error) {
        if (error instanceof ValidationError) {
            //Recorrer el arreglo de errores
            //map
            const errores = error.errors.map((elemento) => elemento.message)
            res
                .status(400)
                .json({
                    "success": false,
                    "errors": error
                })
        } else {
            res
                .status(400)
                .json({
                    "success": false,
                    "errors": "Error de servidor"
                })
        }
    }
}