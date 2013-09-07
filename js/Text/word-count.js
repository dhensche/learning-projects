#!/usr/bin/env node

var program = require('commander');
    
function countWords(text) {
  var cleansed = text.replace(/[^\w\s']/g, '').toLowerCase(),
      counts = {},
      maxReported = program.max || Infinity,
      limit = program.limit || 0;
      
  cleansed.split(/\s+/).forEach(function counter(word) {
    counts[word] = counts[word] ? counts[word] + 1 : 1; 
  });
  var sorted = Object.keys(counts).sort(function(a, b) {
    var countSort = counts[b] - counts[a];
    return countSort != 0 ? countSort : a > b;
  });
  
  sorted.forEach(function(word, i) {
    var count = counts[word];
    if (i < maxReported && count >= limit) {
      console.log('# of instances of %s: %d', word, count);
    }
  });  
};
program
  .option('-f, --file [f]', 'file you want word counts of')
  .option('-l --limit [l]', 'the lowest count reported', parseInt)
  .option('-m --max [m]', 'the max number of words reported', parseInt)
  .parse(process.argv);
  
if (program.file) {
  console.log(program.file)
  var fs = require('fs');
  fs.readFile(program.file, {encoding: 'utf8'}, function read(err, data) {
    if (err) console.err(err);
    else {
      countWords(data);
    }
  });
} else {
  var prompt = require('prompt');
  prompt.start();
  prompt.message = 'Count Words';
  prompt.get(['text'], function(err, result) {
    countWords(result.text);
  });
}