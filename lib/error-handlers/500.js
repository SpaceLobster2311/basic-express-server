'use strict';

module.exports = (err,req,res,next) => {
  console.log(500);
  res.status(500).send(err);
};
