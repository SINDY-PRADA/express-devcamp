//Dependencias:
//Objeto de conexión
const sequelize = require('../config/seq')
//Datatypes de Sequelize
const { DataTypes, ValidationError } = require('sequelize')
//El modelo
const CourseModel = require('../models/courses')
const { response } = require('express')
//Crear la entidad
const Course = CourseModel(sequelize, DataTypes)


//Listar todos los courses
exports.getAllCourses = async (req, res) => {

    //Traer los usuarios
    try {
        const courses = await Course.findAll();
        //Response con los datos
        res
            .status(200)
            .json({
                "success": true,
                "data": courses
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

//Listar Course por id
exports.getSingleCourse = async (req, res) => {
    try {
        const singleCourse = await Course.findByPk(req.params.id)
        if (singleCourse) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleCourse
                })
        } else {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Course no existente"
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

//Actualizar Courses
exports.updateCourse = async (req, res) => {
    try {
        const singleCourse = await Course.findByPk(req.params.id);
        if (!singleCourse) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Course no existente"
                })
        } else {
            await Course.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const updateCourse = await Course.findByPk(req.params.id)
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updateCourse
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
//Eliminar Courses 
//Borrar Courses
exports.deleteCourse = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleCourse = await Course.findByPk(req.params.id);
        if (!SingleCourse) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Course no existente"
        })
        } else {
            await Course.destroy({
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
    
//Crear nuevo Course
exports.createCourse = async (req, res) => {
    try {
        const newCourse = await Course.create(req.body)
        res
            .status(200)
            .json({
                "success": true,
                "data": newCourse
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
