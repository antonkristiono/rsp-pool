'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      room_id: {
        type: Sequelize.INTEGER
      },
      total_person: {
        type: Sequelize.INTEGER
      },
      booking_time: {
        type: Sequelize.DATE
      },
      noted: {
        type: Sequelize.STRING
      },
      check_in_time: {
        type: Sequelize.DATE
      },
      check_out_time: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('bookings');
  }
};