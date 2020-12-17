'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rooms.init({
    id: DataTypes.INTEGER,
    room_name: DataTypes.STRING,
    room_capacity: DataTypes.STRING,
    photo: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,
    deleted_at: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'rooms',
  });
  return rooms;
};