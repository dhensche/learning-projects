var VowelCounter = require('../../Text/count-vowels');

var endpoints = [];

endpoints.push({
  method: 'get',
  path: '/count-vowels',
  handler: function handler(req, res) {
    res.json(VowelCounter.count(req.query.text));
  }
});

exports.endpoints = endpoints;