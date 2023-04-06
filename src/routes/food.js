'use strict';

const express = require('express');
const router = express.Router();
const {Food} = require('../models/food');

router.get('/', readFood);
router.get('/:id', readOneFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);



//const data = [];

async function readFood(request, response, next){
  let data = await Food.findAll();
  response.json(data);
}

async function readOneFood(request, response, next) {
  let data = await Food.findByPk(request.params.id);
  response.json(data);
}

async function createFood(request, response, next) {
  try{
    const food = await Food.create(request.body);
    response.json(food);
  } catch (e){
    console.log(e);
  }
}

async function updateFood(request, response, next) {
  await Food.update({name: request.body.name, good: request.body.good}, {
    where: {
      id: request.params.id,
    },
  });

  const food = await Food.findByPk(request.params.id);
  response.send(food);
}

async function deleteFood(request, response, next) {
  await Food.destroy({
    where:{
      id: request.params.id,
    },
  });
  response.status(200);
}

module.exports = router;
