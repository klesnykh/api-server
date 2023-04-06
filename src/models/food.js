'use strict';

require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');

const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';

const sequelize = new Sequelize('sqlite:memory:');

const Food = sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  good: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = {
  sequelize,
  Food,
};