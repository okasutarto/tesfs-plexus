'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let inventories = require('../data/inventory.json');
    inventories.forEach(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    })
    await queryInterface.bulkInsert('Inventories', inventories, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Inventories', null, {});
  }
};
