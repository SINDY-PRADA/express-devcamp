'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('bootcamps', [{
      name: 'Yari',
      description: 'ydcufino',
      website: '12345',
      phone: '3133092008',
      average_rating: '50000',
      average_cost: '20000'
    },
    {
      name: 'Nicolas',
      description: 'nperaza',
      website: '67892',
      phone: '3223554145',
      average_rating: '65000',
      average_cost: '30000'
    },
    {
      name: 'Sindy',
      description: 'syprada',
      website: '72634',
      phone:'3212973090',
      average_rating: '70000',
      average_cost: '10000'
    }
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};