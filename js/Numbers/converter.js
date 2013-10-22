#!/usr/bin/env node

var bigint = require('bigint'),
	  _digits = '0123456789abcdefghijklmnopqrstuvwxyz'.split(''),
    digits = {};
    
(function init() {
  _digits.forEach(function(digit, value) {
    digits[digit] = value;
  });
})();
    
function toDecimal(value, inBase) {
  var result = bigint(0), i, pow;
  value = value.toString();
  for (i = value.length - 1, pow = 0; i >= 0; i--, pow++) {
    var multiplier = bigint(inBase).pow(pow),
        digitValue = digits[value[i].toLowerCase()];
    if (digitValue >= inBase) throw new Error('Digit ' + value[i] + ' is out of range for numbers of base ' + inBase);
    result = result.add(bigint(digitValue).mul(multiplier))
  }
  
  return result;
}

function convert(value, inBase, outBase) {
  var decimalValue = inBase === 10 ? bigint(value) : toDecimal(value, inBase);
  //todo: implement
}

exports.convert = convert
exports.toDecimal = toDecimal

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
