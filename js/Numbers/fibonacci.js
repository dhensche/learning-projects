#!/usr/bin/env node

var prompt = require('prompt'),
    BigNumber = require('big-number').n,
	  cache = [0, 1];
	
prompt.start();
prompt.message = 'First n numbers of the fibonacci sequence';

function fib(n) {
	if (cache[n] != null) return cache[n];
	else {
		cache[n] = BigNumber(fib(n - 1).toString()).add(fib(n - 2));
		return cache[n];
	}
}

prompt.get({properties: {n: {type: 'number', required: true}}}, function(err, input) {
	if (err) throw err;
	var n = input.n;
	fib(n);
	console.log('The first %d numbers of the fibonacci sequence are \n%s', n, cache.join('\n'));
});