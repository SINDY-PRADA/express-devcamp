//Dependencias:
//Objeto de conexión
const sequelize = require('../config/seq')
//Datatypes de Sequelize
const { DataTypes, ValidationError } = require('sequelize')
//El modelo
const ReviewModel = require('../models/reviews')
const { response } = require('express')
//Crear la entidad
const Review = ReviewModel(sequelize, DataTypes)


//Listar todos Reviews
exports.getAllReviews = async (req, res) => {

    //Traer los Reviews
    try {
        const reviews = await Review.findAll();
        //Response con los datos
        res
            .status(200)
            .json({
                "success": true,
                "data": reviews
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
//Listar Review por id
exports.getSingleReview = async (req, res) => {
    try {
        const singleReview = await Review.findByPk(req.params.id)
        if (singleReview) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleReview
                })
        } else {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Review no existente"
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

//Actualizar Reviews
exports.updateReview = async (req, res) => {
    try {
        const singleReview = await Review.findByPk(req.params.id);
        if (!singleReview) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Review no existente"
                })
        } else {
            await Review.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const updateReview = await Review.findByPk(req.params.id)
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updateReview
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

//Eliminar Reviews
//Borrar Reviews
exports.deleteReview = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleReview = await Review.findByPk(req.params.id);
        if (!SingleReview) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Review no existente"
        })
        } else {
            await Review.destroy({
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
//Crear nuevo Review
exports.createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body)
        res
            .status(200)
            .json({
                "success": true,
                "data": newReview
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