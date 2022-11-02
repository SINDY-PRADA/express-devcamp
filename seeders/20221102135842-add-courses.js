'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */

      await queryInterface.bulkInsert('courses', [{
        title: 'Yari',
        description: '@jjj',
        weeks:124,
        enroll_cost:1.2,
        minimun_skil:'principal',
        bootcamp_id:1
       
      },
      {
        title: 'Yari',
        description: '@jjj',
        weeks:124,
        enroll_cost:1.2,
        minimun_skil:'principal',
        bootcamp_id:2
       
      },
      {
        title: 'Yari',
        description: '@jjj',
        weeks:124,
        enroll_cost:1.2,
        minimun_skil:'principal',
        bootcamp_id:3
       
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('courses', null, {});
     
  }
};