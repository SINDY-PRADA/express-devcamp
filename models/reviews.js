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
          args:[8,9],
          msg:"Title maximo 9 caracteres"
        },
      }
    },
    text: {
      type: DataTypes.STRING, 
    validate: { 
    notEmpty: {
      args: true,
      msg: 'Campo requerido'
    },
    len:{
      args:[8,9],
          msg:"Text maximo 9 caracteres"
        },
      },
    },

    rating:{
      type: DataTypes.FLOAT,
      validate: { 
        notEmpty: {
          args: true,
          msg: 'Campo requerido'
        },
          isNumeric: {
           args: true,
           msg: 'El rating debe tener solo numeros'        
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