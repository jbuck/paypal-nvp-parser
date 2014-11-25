var assert = require("assert");
var parse = require("./index");

assert.deepEqual(parse({
  L_TIMESTAMP0: "2014-12-01T00:00:00Z",
  L_TIMESTAMP1: "2014-12-02T00:00:00Z",
  L_STATUS0: "Completed",
  L_STATUS1: "Failed",
  ACK: "Success"
}), {
  L: [
    {
      TIMESTAMP: "2014-12-01T00:00:00Z",
      STATUS: "Completed"
    },
    {
      TIMESTAMP: "2014-12-02T00:00:00Z",
      STATUS: "Failed"
    }
  ],
  ACK: "Success"
});
