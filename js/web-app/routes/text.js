var VowelCounter = require('../../Text/count-vowels'),
    Reverser = require('../../Text/reverse'),
    PigLatin = require('../../Text/pig-latin');

var endpoints = [];

endpoints.push({
  method: 'get',
  path: '/count-vowels',
  handler: function handler(req, res) {
    res.json(VowelCounter.count(req.query.text));
  }
});

endpoints.push({
  method: 'get',
  path: '/reverse',
  handler: function handler(req, res) {
    res.json(Reverser.reverse(req.query.text));
  }
});

endpoints.push({
  method: 'get',
  path: '/pig-latin',
  handler: function handler(req, res) {
    res.json(PigLatin.translate(req.query.text));
  }
});

exports.endpoints = endpoints;