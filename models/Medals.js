const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("sqlite::memory:");

const Medals = sequelize.define('Medals', {
  // Model attributes are defined here
  Country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Gold: {
    type: DataTypes.NUMBER,
    allowNull: false
    // allowNull defaults to true
  },
  Silver: {
    type: DataTypes.NUMBER,
    allowNull: false
    // allowNull defaults to true
  },
  Bronze: {
    type: DataTypes.NUMBER,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

module.exports = Medals