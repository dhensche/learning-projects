#!/usr/bin/env node

var prompt = require('prompt'),
    BigNumber = require('big-number').n;

/**
  Uses the Taylor series expansion for arctan
  http://en.wikipedia.org/wiki/Inverse_trigonometric_functions#Infinite_series

  @returns BigNumber
*/
function arccot(x, precision) {
  var unity = BigNumber(10).pow(precision + 10),
      sum = BigNumber(unity.toString()).div(x),
      xpower = BigNumber(sum.toString()), n = 3, sign = -1, term;
      
  for(;;) {
    xpower.div(Math.pow(x, 2));
    term = BigNumber(xpower.toString()).div(n);
    
    if (term.isZero()) break;
    
    sum.plus(term.mult(sign));
    sign = -sign;
    n += 2;
  }
  
  return sum;
}

function pi_digits(n) {
  var pi = (arccot(5, n).mult(4).minus(arccot(239, n))).mult(4);
  return pi.div(Math.pow(10, 10));
}

prompt.start();
prompt.message = 'Pi to n digits';

prompt.get({properties: {digits: {type: 'number', default: 100}}}, function(err, input) {
	if (err) throw err;
	var n = input.digits;
	console.log('The first %d digits of Pi are \n%s', n, pi_digits(n).toString());
});