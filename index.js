var querystring = require("querystring");
var list = /^L_(\w+)(\d+)$/;

module.exports = function(input) {
  var data;
  var output = {};

  if (typeof input === "string") {
    data = querystring.parse(input);
  } else {
    data = input;
  }

  Object.keys(data).forEach(function(key) {
    var list_match = key.match(list);

    if (!list_match) {
      return output[key] = data[key];
    }

    if (!Array.isArray(output.L)) {
      output.L = [];
    }

    if (!output.L[list_match[2]]) {
      output.L[list_match[2]] = {};
    }

    output.L[list_match[2]][list_match[1]] = data[key];
  });

  return output;
};
