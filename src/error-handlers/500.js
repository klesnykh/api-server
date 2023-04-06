'use strict';

function error500(error, request, response, next) {
  console.log(error);
  response.status(500).send('500/Servor Error');
}

module.exports = error500;