'use strict';

require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');

const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';

const sequelize = new Sequelize('sqlite:memory:');

const Clothes = sequelize.define('Clothes', {
  //example:
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  on: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = {
  sequelize,
  Clothes,
};