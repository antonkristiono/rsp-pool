'use strict';
const passwordHash = require('password-hash');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const users = [];
    for (let i = 0; i < 100; i++) {
      users.push({
        id: `${i}`,
        photo: `user${i}.jpg`,
        email: `user${i}@gmail.com`,
        password: passwordHash.generate(`user${i}`),
        created_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        updated_at: new Date(),
        deleted_at: new Date()
      });

    }
    return queryInterface.bulkInsert('users', users, {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('users', null, {
      truncate: true
    });
  }
};
