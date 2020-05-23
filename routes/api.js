/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
      if (!input) {
        res.json("No Entry");
      } else {
          let initNum = convertHandler.getNum(input);
          let initUnit = convertHandler.getUnit(input);
          console.log(initUnit);
          let returnNum = convertHandler.convert(initNum, initUnit);
          let returnUnit = convertHandler.getReturnUnit(initUnit);
          console.log(returnNum);
          if (isNaN(initNum) && initUnit == undefined) { 
            res.json({ error: "invalid number and unit", string: "Error - " + input });
          } else if (isNaN(initNum)) {
            res.json({ error: "invalid number", string: "Error - " + input });
          } else if (initUnit == undefined) {
            res.json({ error: "invalid unit", string: "Error - " + input });
          } else {
            let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
            console.log(toString);
            res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString});            
          }
        }
    });
    
};
