// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = "";

  if(typeof obj === "string") {
    return "\"" + obj + "\"";
  }
  
  if(typeof obj === "number" || typeof obj === "boolean") {
    return obj.toString();
  } 
  
  if(obj === NaN || obj === null || obj === Infinity) {
    return "null";
  }

  if(Array.isArray(obj)) {
    if(obj.length === 0) {
      return "[]";
    }
    result += "[";
    for(var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]) + ",";
    }
    return result.slice(0, -1) + "]";
  }

  if(typeof obj === "object") {
    if(Object.getOwnPropertyNames(obj).length === 0) {
      return "{}";
    }
    result += "{";
    for(var key in obj) {
      if(typeof obj[key] === "function" || obj[key] === undefined) {
        return "{}";
      }
      result += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
    }
    return result.slice(0, -1) + "}";
  }
  
  if(typeof obj === "function" || obj === undefined) {
    return "{}";
  }

};
