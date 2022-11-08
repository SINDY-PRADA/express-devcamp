const express = require('express')

//definir objeto de ruteo 
const router = express.Router()
const {
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
    createReview
 } = require('../controllers/ReviewController')

 //crear rutas sin parametro 
 router.route('/')
                .get(getAllReviews)
                .post(createReview)
//crear rutas con parametro 
router.route('/:id')
        .get(getSingleReview)
        .put(updateReview)
        .delete(deleteReview)

module.exports = router