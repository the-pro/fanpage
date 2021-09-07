const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("sqlite::memory:");

const Schedule = sequelize.define('Schedule', {
  // Model attributes are defined here
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: false
    // allowNull defaults to true
  },
  Live: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
  }
}, {
  // Other model options go here
  tableName: 'Schedule'
});

module.exports = Schedule