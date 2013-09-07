#!/usr/bin/env node

var prompt = require('prompt');
prompt.start();
prompt.message = 'Palindrome'
prompt.get(['text'], function(err, result) {
  var input = result.text.toLowerCase(),
      l = input.length,
      palindrome = true,
      i, j;
  for (i = 0, j = l - 1; i <= l/2; i++, j--) {
    palindrome = input[i] == input[j];
    if (!palindrome) break;
  }
    
  console.log('%s is%s a palindrome', input, palindrome ? '' : ' not');
});