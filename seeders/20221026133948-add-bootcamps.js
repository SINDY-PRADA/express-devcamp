'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('bootcamps', [{
      name: 'PHP Bootcamp',
      description: 'Bootcamp for PHP learning',
      phone: '(57)6011111',
      average_rating: 4500,
      average_cost: 3,
      user_id:1
    },
    {
      name: 'Express Backend',
      description: 'Bootcamp for Javascript learning',
      phone: '(57)6022222',
      average_rating: 6500,
      average_cost: 3,
      user_id: 1
    },
    {
      name: 'CSS Bootcamp',
      description: 'Bootcamp for CSS learning',
      phone: '(57)6033333',
      average_rating: 5500,
      average_cost: 3,
      user_id: 1
    }
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};