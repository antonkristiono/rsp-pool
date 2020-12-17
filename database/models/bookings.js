'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bookings.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    total_person: DataTypes.INTEGER,
    booking_time: DataTypes.TIME,
    noted: DataTypes.STRING,
    check_in_time: DataTypes.TIME,
    check_out_time: DataTypes.TIME,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,
    deleted_at: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'bookings',
  });

  bookings.associate = function(models){
    bookings.belongsTo(models.users,{foreignKey:'user_id',as:'id'})
  };

  return bookings;
};
