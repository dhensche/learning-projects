#!/usr/bin/env node

var prompt = require('prompt');

function generatePrimeFactors(n) {
  if (n == 1) return []
  else {
    var factor, i;
    for(i = 2; i <= n; i++) {
      if (n % i === 0) {
        factor = i;
        break;
      }
    }
    
    var arr = generatePrimeFactors(n / factor);
    arr.push(factor);
    return arr;
  }
}

prompt.start();
prompt.message = 'Prime factors of n';
prompt.get({
  properties: {
    n: {
      type: 'number',
      required: true,
      pattern: /^\d+$/,
      message: 'Must be a positive whole number'
    }
  }
}, function(err, input) {
	if (err) throw err;
	var n = input.n;
	console.log('The prime factors of %d are \n%s', n, generatePrimeFactors(n));
});