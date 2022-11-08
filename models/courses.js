'use strict';
const e = require('express');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
        unique(value) {
          return Course.findOne({where:{title:value}})
            .then((title) => {
              if (title) {
                throw new Error('Existe mas de un nombre asi');
              }
            })
        },
        isAlpha: {
          args: true,
          msg: 'Title debe tener solo letras'
        },
        notNull: {
          args: true,
          msg: 'El title debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'Title no debe estar vacio'
        },
        notEmpty: {
          args: true,
          msg: 'Campo requerido'
        },
        len:{
          args:[5,10],
          msg:"Title minimo 5 y maximo 10 caracteres"
        },
      }
    },
    description: {
      type: DataTypes.STRING, 
    validate: { 
    notEmpty: {
      args: true,
      msg: 'Campo requerido'
    },
    len:{
      args:[10,10],
          msg:"Descripcion minimo 10 caracteres"
        },
      },
    },

    weeks:{
      type: DataTypes.FLOAT,
      validate: { 
        notEmpty: {
          args: true,
          msg: 'Campo requerido'
        },
        len:{
          args:[1,9],
          msg:"El número máximo de semanas para un curso es 9"        
          },
        }
     },
     enroll_cost: {
      type: DataTypes.FLOAT,
      validate: {
        isNumeric: {
         args: true,
         msg: 'enroll_cost  debe tener solo numeros'        
      },
        notEmpty: {
        args: true,
          msg: 'Campo requerido'
        },
      },
    },

    minimum_skill: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Campo requerido'
      },
    }, 
 },

   bootcamp_id: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'bootcamp_id requerido'
    }
  }    
}
  }, {
    sequelize,
    modelName: 'Course',
    timestamps: false
  });
  return Course;
};