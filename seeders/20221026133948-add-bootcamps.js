'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */

      await queryInterface.bulkInsert('bootcamps', [{
        name: '' ,
        description: '',
        website: '',
        phone: '',
        average_rating: '',
        average_cost: ''
       
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('bootcamps', null, {});
     
  }
};