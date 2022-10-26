const sequelize = require('./seq')
const colors = require('colors')
const { DataTypes } = require('sequelize')

//Crear una instancia de el modelo User
const UserModel = require('../models/user')
const User= UserModel(sequelize, DataTypes)

    //definir la funcion de conexion a la base de datos
    const connectDB = async ()=>{

    //Conectarse a la base de datos
    try {
    await sequelize.authenticate()
    console.log('conectado mysql'.bgMagenta.blue)
    const jane = await User.create(
        { username: "Jane", 
        email: "Jane@misena.edu.co", 
        password:"7890" 
        });
    console.log("Jane's auto-generated ID:", jane.id);
    
    } catch (error){
    console.log(error)
    }
}
connectDB()