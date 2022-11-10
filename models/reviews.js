'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
        unique(value) {
          return Review.findOne({where:{title:value}})
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
          msg: 'Title debe estar presente'
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
          args:[9,10],
          msg:"Title maximo 10 caracteres"
        },
      }
    },
    text: {
      type: DataTypes.STRING, 
    validate: { 
    notEmpty: {
      args: true,
      msg: 'Text campo requerido'
    },
    len:{
      args:[9,10],
          msg:"Text maximo 10 caracteres"
        },
      },
    },

    rating:{
      type: DataTypes.FLOAT,
      validate: { 
          isNumeric: {
           args: true,
           msg: 'El rating debe tener solo numeros'        
          },
          len:{
            args:[1,1],
            msg:"rating debe ser un número entero"        
            },
        },  
     },

     bootcamp_id: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'bootcamp_id requerido'      
          },
      },  
   },
    user_id: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'user_id requerido'  
        }
    }
 }

  }, {
    sequelize,
    modelName: 'Review',
    timestamps: false
  });
  return Review;
};