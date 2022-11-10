//Dependencias:
//Objeto de conexión
const sequelize = require('../config/seq')
//Datatypes de Sequelize
const { DataTypes, ValidationError } = require('sequelize')
//El modelo
const UserModel = require('../models/user')
const { response } = require('express')
//Crear la entidad
const User = UserModel(sequelize, DataTypes)


//Listar todos los users
exports.getAllUsers = async (req, res) => {

    //Traer los usuarios
    try {
        const users = await User.findAll();
        //Response con los datos
        res
            .status(200)
            .json({
                "success": true,
                "data": users
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
//Listar user por id
exports.getSingleUser = async (req, res) => {
    try {
        const singleUser = await User.findByPk(req.params.id)
        if (singleUser) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleUser
                })
        } else {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Usuario no existente"
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

//Actualizar users
exports.updateUser = async (req, res) => {
    try {
        const singleUser = await User.findByPk(req.params.id);
        if (!singleUser) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Usuario no existente"
                })
        } else {
            await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const updateUser = await User.findByPk(req.params.id)
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updateUser
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

//Eliminar users
//Borrar users 
exports.deleteUser = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleUser = await User.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
            await User.destroy({
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
//Crear nuevo user
exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res
            .status(200)
            .json({
                "success": true,
                "data": newUser
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
                    "errors": errores
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