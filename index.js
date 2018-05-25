var querystring = require("querystring");
var list = /L_([A-Za-z]+)(\d+)/;

module.exports = function(input) {
  var data;
  var output = {};

  if (typeof input === "string") {
    // Parse without limits on the maximum number of keys, see:
    // https://nodejs.org/api/querystring.html#querystring_querystring_parse_str_sep_eq_options
    data = querystring.parse(input, null, null, { maxKeys: 0 });
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
