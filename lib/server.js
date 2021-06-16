'use strict';
// importing dependancy
const express = require('express');
//initializing dependancy
const logger = require('./middleware/logger.js');
console.log(logger);
const validator = require('./middleware/validator.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');

const app = express();

app.use(logger);
app.use(validator);


app.get(('/person'), validator, (req,res) => {
  res.send({name: req.query.name});
});

app.get('/', (req, res) => {
  res.send(`${req.query.name} thanks`);
});

app.use('*', error404);

app.use(error500);


module.exports = {app, start: (PORT) => {
  app.listen(PORT, () => console.log('server is up'));
}};
