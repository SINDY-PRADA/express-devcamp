'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //crear la columna 'user_id' FK con users
    //addColumn: parametros:
    //1. La tabla en la cual poner la columna 
    //2. El nombre de la nueva columna
    //3. Opciones de la nueva columna
    await queryInterface.addColumn('Courses',
                                    'bootcamp_id',
                                    { 
                                      type: Sequelize.INTEGER,
                                      references: {
                                      model: 'courses',
                                      key: 'id'
                                      },
                                      onUpdate: 'CASCADE',
                                      onDelete: 'SET NULL'
                                    }
                                    )

  },

  async down (queryInterface, Sequelize) {
    //METODO REMOVE cOLUM
    //Parametros: 
    //1. La tabla de donde vasa a remover
    //2 La columna a eliminar
    await queryInterface.removeColumn('courses','bootcamp_id')

  }
};

