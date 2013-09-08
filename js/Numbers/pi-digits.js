#!/usr/bin/env node

var program = require('commander');

Number.prototype.getAllDigits = function getAllDigits() {
  var digits = [],
      copy = this,
      log10 = Math.log(10);
  for(; copy;) {
    var base = Math.pow(10, Math.floor(Math.log(copy)/log10));
    var leftovers = copy % base;
    digits.push(Math.floor(copy / base));
    copy = leftovers;
  }
  
  digits.push(copy);
  return digits.join('');
}

/**
  Uses the Taylor series expansion for arctan
  http://en.wikipedia.org/wiki/Inverse_trigonometric_functions#Infinite_series
*/
function arccot(x, precision) {
  var unity = Math.pow(10, precision + 10),
      sum = Math.floor(unity / x),
      xpower = sum, n = 3, sign = -1;
      
  for(var term = sum; ;) {
    xpower = Math.floor(xpower / Math.pow(x, 2));
    term = Math.floor(xpower / n);
    
    if (!term) break;
    
    sum += sign * term;
    sign = -sign;
    n += 2;
  }
  
  return sum;
}

function pi_digits(n) {
  var pi = 4 * (4 * arccot(5, n) - arccot(239, n));
  return pi / Math.pow(10, 10);
}

program
  .option('-d --digits [d]', 'the number of digits of Pi to calculate (defaults to 100)', parseInt)
  .parse(process.argv);
  
var n = process.digits || 100;
console.log('%d first digits of Pi are \n%s', n, pi_digits(n).getAllDigits());