const sequelize = require('./seq')
const colors = require('colors')

//const { DataTypes} =require('sequelize')
//crea una instancia de el modelo user
//const UserModel = require('../models/user')
//const User =  UserModel(sequelize,DataTypes)
//definir la funcion de conexion a la base 
//de datos 

const connectDB = async ()=>{
 //conectarse a la bd 
 try{
    await sequelize.authenticate()
    console.log('conectado a mysql'.bgCyan.bgBlack)

 }catch(error){
    console.log(error)
 }

}
module.exports = connectDB







   /* const jane = await User.create
    ({ username: "Jane", 
       email: "ydcufino@misena.edu,.co",
       password:"23456"});
    console.log("Jane's auto-generated ID:", jane.id);*/