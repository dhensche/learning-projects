#!/usr/bin/env node

var prompt = require('prompt'),
    program = require('commander'),
    bigint = require('bigint');



prompt.start();
prompt.message = 'Prime numbers: ';
prompt.delimiter = '';


function isPrime(n) {
  if (n.eq(2) || n.eq(3)) return true;
  if (n.lt(2) || n.mod(2).eq(0)) return false;
  if (n.lt(9)) return true;
  if (n.mod(3).eq(0)) return false;

  var r = n.sqrt(),
      f = bigint(5);
      
  for (; f.le(r); f = f.add(6)) {
    if (n.mod(f).eq(0)) return false;
    if (n.mod(f.add(2)).eq(0)) return false;
  }
  
  return true;
};

program
  .option('-s, --start [s]', 'the number you want to start at')
  .parse(process.argv);

(function showNext(current) {
  prompt.get(
    {
      properties: {
        next: {
          description: 'Show Next?',
          validator: /y(es)?|n(o)?/,
          warning: 'Valid options are y(es) or n(o)',
          default: 'y'
        }
      }
    }, function(err, input) {
  	  if (err) throw err;
  	  var show = /y(es)?/.test(input.next);
    
      if (show) {
        for (; !isPrime(current); current = current.add(1));
        console.log('Next Prime is %d', current);
        showNext(current.add(1));
      }
  });
})(bigint(program.start || 1));
