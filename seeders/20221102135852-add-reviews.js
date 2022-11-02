'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */

      await queryInterface.bulkInsert('reviews', [{
        title: 'Yari',
        text: '@jjj',
        rating: '12345',
        user_id:1,
     
       
      },
      {
        title: 'Yari',
        text: '@jjj',
        rating: '12345',
        user_id:2,
     
       
      },
      {
        title: 'Yari',
        text: '@jjj',
        rating: '12345',
        user_id:3,
        
       
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('reviews', null, {});
     
  }
};

