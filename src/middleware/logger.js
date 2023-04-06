'use strict';

function logName(request, response, next) {
  console.log(request.query.name);
  next();
}

module.exports = logName;