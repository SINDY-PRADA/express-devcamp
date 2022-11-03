'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('courses', [{
      title: 'Matematicas',
      description: 'Regla de tres simple',
      weeks: 4,
      enroll_cost: 50,
      minimum_skill: 'Intermedio',
      bootcamp_id: 1
    },
    {
      title: 'Ingles',
      description: 'Verbo TO BE',
      weeks: 6,
      enroll_cost: 6,
      minimum_skill: 'Beginner',
      bootcamp_id: 2
    },
    {  title: 'Español',
    description: 'Signos de puntuacion',
    weeks: 4,
    enroll_cost: 8,
    minimum_skill: 'Avanzado',
    bootcamp_id: 3
  }
], {});

},

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('courses', null, {});
  }
};

