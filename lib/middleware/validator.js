'use strict';


module.exports = (req,res,next) => {
  if(!req.query.name){
    next('No name found');
  } else {
    next();
  }
};