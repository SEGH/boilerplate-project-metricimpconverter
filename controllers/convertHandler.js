/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let findUnit = input.match(/[A-Z]/i);
    
    if (!findUnit) {
      result = input;
    } else {
        let first = findUnit[0];
        let unitIndex = input.indexOf(first);
        let number = input.slice(0, unitIndex);
        result = number;
    }
    
    if (result.includes("/")) {
      let multFrac = /([\/][\d]*[.]*[\d]*){2,}/g;
      if (result.match(multFrac)) {
        console.log("multfrac!");
        result = undefined;
      } else {
        
          let notepad = result.split("/");
          result = notepad[0] / notepad[1];
          result = Math.round((result + Number.EPSILON) * 100000) / 100000;
        }
    } else if (result == '') {
        result = 1;
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km'];
    let result;
    let findUnit = input.match(/[A-Z]/i);
    
    if (!findUnit) {
      result = undefined;
    } else {
        let first = findUnit[0];
        let unitIndex = input.indexOf(first);
        let unit = input.slice(unitIndex);
        unit = unit.toLowerCase();
      if (units.includes(unit)) {
        result = unit;
      } else {
        result = undefined;
      }
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    switch (initUnit) {
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = undefined;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters"
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      default:
        result = undefined;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = undefined;
    }
      console.log(result);
      result = Math.round((result + Number.EPSILON) * 100000) / 100000;
      return result;
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let fullInit = this.spellOutUnit(initUnit);
    let fullReturn = this.spellOutUnit(returnUnit);
    let result = initNum + " " + fullInit + " converts to " + returnNum + " " + fullReturn;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
