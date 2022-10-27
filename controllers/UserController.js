//dependencias
const sequelize = require ('../config/Seq')
//data
const {DataTypes} = require ('sequelize')
//el modelo 
const UserModel = require ('../models/user')
//crear la entidad 
const User = UserModel(sequelize,DataTypes)



//listar todos los user
exports.getAllUsers =  async (req , res) =>{
   //traer los usuarios 
   const users = await  User.findAll();
   //responde con los datos 
   res
   .status(200)
   .json({
       "success": true,
       "data" : users
   })
}
//Listar user pi Id
exports.getSingleUser = async (req , res) =>{
    const singleUser = await User.findByPk(req.params.id);
   res
   .status(200)
   .json({
       "success": true,
       "data" : singleUser
   })
}


//Actualizar user
exports.updateUser = async (req , res) =>{
   await User.update( req.body, {
    where: {
        id: req.params.id
    }
   });
   const singleUser = await User.findByPk(req.params.id);
   
    // console.log(req.params.id)
   res
   .status(200)
   .json({
       "success": true,
       "data" : singleUser
   })
}

//Eliminar user
exports.deleteUser = async (req , res) =>{
    const singleUser = await User.findByPk(req.params.id);
    await User.destroy({
        where:{
            id: req.params.id
        }
    });
   res
   .status(200)
   .json({
       "success": true,
       "data" : singleUser
   })
}

//Crear nuevo user
exports.createUser = async (req , res) =>{

   const newUser = await User.create(req.body);
   res
   .status(200)
   .json({
       "success": true,
       "data" :newUser
   })
}