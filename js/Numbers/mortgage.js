#!/usr/bin/env node

function Mortgage(principal, rate, term) {
  return {
    principal: principal,
    rate: rate,
    term: term,
    monthlyRate: rate / 12,
    monthlyPayment: function() {
      var amortization =  Math.pow(1 + this.monthlyRate, term);
      var numer = this.monthlyRate * amortization;
      var denom = amortization - 1;
      
      return principal * (numer / denom)
    }
  }
}


if (require.main === module) {
	/*var prompt = require('prompt');
	
	prompt.start();
	prompt.message = 'First n numbers of the fibonacci sequence';
	prompt.get({properties: {n: {type: 'number', required: true}}}, function(err, input) {
		if (err) throw err;
		var n = input.n;
		fib(n);
		console.log('The first %d numbers of the fibonacci sequence are \n%s', n, cache.join('\n'));
	});*/
}
