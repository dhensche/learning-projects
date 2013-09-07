#!/usr/bin/env node

var prompt = require('prompt');
prompt.start();
prompt.message = 'Reverse'
prompt.get(['string'], function(err, result) {
    var reversed = [],
        input = result.string;
    for (var i = input.length - 1; i >= 0; i--) {
      reversed.push(input[i]);
    }
    
    console.log('%s reversed is: %s', input, reversed.join(''))
  });