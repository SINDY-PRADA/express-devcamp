const express = require('express')

//definir objeto de ruteo 
const router = express.Router()
const {
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser
 } = require('../controllers/UserController')

 //crear rutas sin parametro 
 router.route('/')
                .get(getAllUsers)
                .post(createUser)
//crear rutas con parametro 
router.route('/:id')
        .get(getSingleUser)
        .put(updateUser)
        .delete(deleteUser)

module.exports = router