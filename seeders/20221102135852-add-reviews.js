'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [{
      title: 'Bootcamp',
      Text: 'Animacion',
      rating: 5,
      bootcamp_id: 1,
      user_id:1
    },
    {
        title: 'CSS',
        Text: 'Estilos',
        rating: 7,
        bootcamp_id: 2,
        user_id: 2
    },
    {
      
        title: 'JAVA',
        Text: 'Logica',
        rating: 8,
        bootcamp_id: 3,
        user_id: 3
    }
  
  
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
