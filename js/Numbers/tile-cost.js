#!/usr/bin/env node

var prompt = require('prompt');



prompt.start();
prompt.message = 'Flooring cost calculator';

prompt.get({
  properties: {
    width: {
      type: 'number',
      validator: /[^-]+/,
      warning: 'Only positive numbers are accepted'
    },
    height: {
      type: 'number',
      validator: /[^-]+/,
      warning: 'Only positive numbers are accepted'
    },
    cost: {
      description: 'Cost per unit squared',
      type: 'number',
      validator: /[^-]+/,
      warning: 'Only positive numbers are accepted'
    }
  }
}, function(err, input) {
  if (err) throw err;
  var w = input.width,
      h = input.height,
      c = input.cost;
  console.log('Total cost to floor an area %d X %d = %d',
              w, h, (w * h * c).toFixed(2));
});
