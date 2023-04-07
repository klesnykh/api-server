'use strict';

const { Sequelize } = require('sequelize');
const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';

const createClothes = require('./clothes');
const createFood = require('./food');
const Collection = require('./collection');

const sequelize = new Sequelize(SQL_URL);
const ClothesModel = createClothes(sequelize);
const FoodModel = createFood(sequelize);

// create our associations / relationships (from sequelize model method)
ClothesModel.hasMany(FoodModel, {foreignKey: 'clothesId', sourceKey: 'id'});
FoodModel.belongsTo(ClothesModel, { foreignKey: 'clothesId', targetKey: 'id'});

module.exports = {
  sequelize,
  Clothes: new Collection(ClothesModel),
  Food: new Collection(FoodModel),
};
