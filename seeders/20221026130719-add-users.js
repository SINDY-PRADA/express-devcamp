'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('users', [{
       username: 'Sindy',
       email: 'syprada2@misena.edu.co',
       password: '56789'
      },
      {

      username: 'Yari',
      email: 'ydcufino@misena.edu.co',
      password: '12345'

    },
    {
      username: 'Jireth',
      email: 'jbaron49@misena.edu.co',
      password: '45678'
    }
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
