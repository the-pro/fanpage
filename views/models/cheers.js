const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("sqlite::memory:");

const Cheers = sequelize.define('Cheers', {
  // Model attributes are defined here
  Country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Gold: {
    type: DataTypes.NUMBER,
    allowNull: false,
    defaultValue: 0
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

module.exports = Cheers