'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //vrear la columna que se llame 'user__id' FK con users
    //addColumn: parametros:
    //1. La tabla en la cual poner las columnas
    //2.El nombre de la nueva columna 
    //3. Opciones d ela nueva columna
    await queryInterface.addColumn('bootcamps', 'user_id',{
      type: Sequelize.INTEGER,
      references:{
        model:'users',
        key: 'id'
      },
      onUpdate:'CASCADE',
      onDelete:'SET NULL'
    } )
  },

  async down (queryInterface, Sequelize) {
    //metodo remove Column
    //parametros: 1. la tabla de donde vas a remover 
            //    2. la  Columna a eliminar
    await queryInterface.removeColumn('bootcamps', 'user_id')
  }
};
