#!/usr/bin/env node

var prompt = require('prompt');
prompt.start();
prompt.message = 'Pig Latin'
prompt.get(['text'], function(err, result) {
  var text = result.text,
      piglatin = [];
  
  piglatin = text.split(/\s+/).map(function(word) {
    var parts = word.match(/([^aeiou]*)(.*)/);
    return [parts[2], '-', parts[1], 'ay'].join('');
  });
  
  console.log('%s in pig latin is:\n%s', text, piglatin.join(' '));
});