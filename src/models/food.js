'use strict';

require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');

//const sequelize = new Sequelize('sqlite:memory:');

const Food = (sequelize) => sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  good: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Food;