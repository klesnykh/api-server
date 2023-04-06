'use strict';

function validate(request, response, next) {
  if (!request.query.name) {
    next('Please attach a name');
  } else {
    next();
  }
}

module.exports = validate;