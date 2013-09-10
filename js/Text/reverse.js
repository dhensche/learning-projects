#!/usr/bin/env node

var prompt = require('prompt');
prompt.start();
prompt.message = 'Reverse'
prompt.get(['text'], function(err, result) {
  var reversed = [],
      input = result.text;
  for (var i = input.length - 1; i >= 0; i--) {
    reversed.push(input[i]);
  }
    
  console.log('%s reversed is:\n%s', input, reversed.join(''))
});