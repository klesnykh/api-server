'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger');
//const validator = require('./middleware/validator');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');
const clothesRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');


app.use(cors());
app.use(express.json());

// this becomes middleware when we add these params
// application level (this runs no matter what route is being used in the request)
app.use(logger);

app.use('/clothes', clothesRouter);
app.use('/food', foodRouter);

// error handler -> magic number of parameters!!
app.use('*', error404);
app.use(error500);

module.exports = {
  app,
  start:  (port) => app.listen(port, () => {
    console.log('Server is listening');
  }),
};