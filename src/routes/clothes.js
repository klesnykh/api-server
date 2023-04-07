'use strict';

const express = require('express');
const router = express.Router();
const {Clothes} = require('../models');

//Methods are being declared for certain desired outcomes
router.get('/', readClothes);
router.get('/:id', readOneClothes);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);


//const data = [];

//Functions made for desired CRUD methods based on the request to have a certain response
async function readClothes(request, response, next){
  try{
    let data = await Clothes.read();
    response.json(data);
  } catch(e){
    console.log(e);
  }
}

async function readOneClothes(request, response, next) {
  let data = await Clothes.read(request.params.id);
  response.json(data);
}

async function createClothes(request, response, next) {
  try {
    const clothes = await Clothes.create(request.body);
    response.json(clothes);
  } catch(e) {
    console.log(e);
  }
  
}

async function updateClothes(request, response, next) {
  await Clothes.update(request.params.id, {name: request.body.name, on: request.body.on});
  const clothes = await Clothes.read(request.params.id);
  response.send(clothes);
}

async function deleteClothes(request, response, next) {
  let num = await Clothes.delete(request.params.id);
  response.status(200).send(`${num}`);
}
//Exports the router wich are CRUD methods
module.exports = router;
