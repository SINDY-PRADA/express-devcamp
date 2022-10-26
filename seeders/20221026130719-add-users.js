'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */

      await queryInterface.bulkInsert('users', [{
        username: 'Yari',
        email: 'ydcufino@misena.edu.co',
        password: '12345',
       
      },
      {
        username: 'Nicolas',
        email: 'nperaza@misena.edu.co',
        password: '4566',
      },
      {
        username: 'Sindy',
        email: 'syprada@misena.edu.co',
        password: '7890',
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('users', null, {});
     
  }
};