var VowelCounter = require('../../Text/count-vowels'),
    Reverser = require('../../Text/reverse'),
    PigLatin = require('../../Text/pig-latin'),
    Palindrome = require('../../Text/palindrome'),
    WordCount = require('../../Text/word-count');

var endpoints = [];

endpoints.push({
  method: 'get',
  path: '/reverse',
  handler: function handler(req, res) {
    res.send(Reverser.reverse(req.query.text));
  }
});

endpoints.push({
  method: 'get',
  path: '/pig-latin',
  handler: function handler(req, res) {
    res.send(PigLatin.translate(req.query.text));
  }
});

endpoints.push({
  method: 'get',
  path: '/count-vowels',
  handler: function handler(req, res) {
    res.json(VowelCounter.count(req.query.text));
  }
});

endpoints.push({
  method: 'get',
  path: '/palindrome',
  handler: function handler(req, res) {
    res.send(Palindrome.test(req.query.text));
  }
});

endpoints.push({
  method: 'get',
  path: '/word-count',
  handler: function handler(req, res) {
    res.json(WordCount.count(req.query.text));
  }
});

exports.endpoints = endpoints;