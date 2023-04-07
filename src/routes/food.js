'use strict';

const express = require('express');
const router = express.Router();
const {Food} = require('../models');

router.get('/', readFood);
router.get('/:id', readOneFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);



//const data = [];

async function readFood(request, response, next){
  let data = await Food.read();
  response.json(data);
}

async function readOneFood(request, response, next) {
  let data = await Food.read(request.params.id);
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
  await Food.update(request.params.id, {name: request.body.name, good: request.body.good});

  const food = await Food.read(request.params.id);
  response.send(food);
}

async function deleteFood(request, response, next) {
  let num = await Food.delete(request.params.id);
  response.status(200).send(`${num}`);
}

module.exports = router;
