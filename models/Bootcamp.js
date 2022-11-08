'use strict';
const e = require('express');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamp.init({
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      unique(value) {
        return Bootcamp.findOne({where:{name:value}})
          .then((name) => {
            if (name) {
              throw new Error('Existe mas de un nombre asi');
            }
          })
      },
        isAlpha: {
          args: true,
          msg: 'El nombre debe tener solo letras'
        },
        notNull: {
          args: true,
          msg: 'El nombre debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'El nombre no debe estra vacio'
        },
      }
    },

      description:{
        type:DataTypes.STRING,
        validate: {
        isAlpha: {
          args: true,
          msg: 'La descripcion debe tener solo letras'
        },
      },
    },

      phone:{
      type:DataTypes.STRING,
      validate: {
        isNumeric: {
         args: true,
         msg: 'El telefono debe tener solo numeros'        
         },
        len:{
         args:[10,10],
         msg:"El telefono debe tener maximo 10 caracteres"
        },
      }
    },
      average_rating: {
      type:DataTypes.INTEGER,
      validate: {
        isNumeric: {
         args: true,
         msg: 'El average rating debe tener solo numeros'        
      },
    },
   },
      average_cost: {
      type:DataTypes.FLOAT,
      validate:{
      notEmpty: {
        args: true,
        msg: 'El average cost debe tener solo numeros'
      },
    },  
 },
 
    user_id: {
    type:DataTypes.INTEGER,
    validate: {
    notEmpty: {
      args: true,
      msg: 'user_id requerido'
    }
  }    
}
  },{ 
    sequelize,
    modelName: 'Bootcamp',
    timestamps: false
  });
  return Bootcamp;
};