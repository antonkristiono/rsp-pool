'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      room_name: {
        type: Sequelize.STRING
      },
      room_capacity: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.TIME
      },
      updated_at: {
        type: Sequelize.TIME
      },
      deleted_at: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rooms');
  }
};