const express = require('express')

//definir objeto de ruteo 
const router = express.Router()
const {
    getAllBootcamps,
    getSingleBootcamp,
    updateBootcamp,
    deleteBootcamp,
    createBootcamp
 } = require('../controllers/BootcampController')

 //crear rutas sin parametro 
 router.route('/')
                .get(getAllBootcamps)
                .post(createBootcamp)
//crear rutas con parametro 
router.route('/:id')
        .get(getSingleBootcamp)
        .put(updateBootcamp)
        .delete(deleteBootcamp)

module.exports = router