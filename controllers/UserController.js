//dependencias
const sequelize = require ('../config/Seq')
//data
const {DataTypes, ValidationError} = require ('sequelize')
//el modelo 
const UserModel = require ('../models/user')
//crear la entidad 
const User = UserModel(sequelize,DataTypes)



//listar todos los user
exports.getAllUsers =  async (req , res) =>{
    try {
        //traer los usuarios 
        const users = await  User.findAll();
        //responde con los datos 
        res
            .status(200)
            .json({
                "success": true,
                "data" : users
            })
        } catch (error) {
            res
            .status(400)
            .json({
            "success": false,
            "errors": "error de servidor desconocido"
            })
        }
    }
          
//Listar user pi Id
exports.getSingleUser = async (req , res) =>{
    try {
        const singleUser = await User.findByPk(req.params.id);
        if(singleUser){
            res
            .status(200)
            .json({
                "success": true,
                "data" : singleUser
            })
        }else{
        res
        .status(200)
        .json({
            "success": true,
            "errors" : "usuario no existente"
        })
    }

    } catch (error) {
        res
            .status(400)
            .json({
                    "success": false,
                    "errors": "error de servidor desconocido"
        })
    }
    
}


//Actualizar user
exports.updateUser = async (req , res) =>{
    try {
        const singleUser = await User.findByPk(req.params.id);
        if(!singleUser){
            res
            .status(400)
            .json({  
                "success": false,
                "errors": "error de servidor desconocido"
            })

        }else{
            //actualizar usuario
        await User.update( req.body, {
            where: {
                id: req.params.id
            }
        }); 
        //seleccionado user actualizado
        const updateUser = await User.findByPk(req.params.id);
        //Enviar respuesta 
        res
           .status(200)
           .json({
               "success": true,
               "data" : updateUser
           })
        }
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor desconocido"
            })
            }
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
  try {
    const newUser = await User.create(req.body);
    res
        .status(200)
        .json({
            "success": true,
            "data" :newUser
        })
    } catch (error) {
        if(error instanceof ValidationError){
        //Recorrer el arreglo de errores
        //Foreach
        //map
        
        const errores = error.errors.map((elemento)=>elemento.message)
        res
            .status(400)
            .json({
                "success": false,
                "errors": errores
            })

        }else{
            res
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor desconocido"
            })
        }
    }  
}