'use strict';

const express = require('express');
const router = express.Router();
const {Clothes} = require('../models/clothes');

router.get('/', readClothes);
router.get('/:id', readOneClothes);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);



//const data = [];

async function readClothes(request, response, next){
  try{
    let data = await Clothes.findAll();
    response.json(data);
  } catch(e){
    console.log(e);
  }
}

async function readOneClothes(request, response, next) {
  let data = await Clothes.findByPk(request.params.id);
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
  await Clothes.update({name: request.body.name, on: request.body.on}, {
    where: {
      id: request.params.id,
    },
  });

  const clothes = await Clothes.findByPk(request.params.id);
  response.send(clothes);
}

async function deleteClothes(request, response, next) {
  await Clothes.destroy({
    where:{
      id: request.params.id,
    },
  });

  let data = await Clothes.findAll();
  response.status(200).json(data);
}

module.exports = router;
