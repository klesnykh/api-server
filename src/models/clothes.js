'use strict';

require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');

// const sequelize = new Sequelize('sqlite:memory:');

const Clothes = (sequelize)=>sequelize.define('Clothes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  on: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Clothes;