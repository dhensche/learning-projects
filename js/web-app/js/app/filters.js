app.filter('range', function() {
  return function(input, start, end, step) {
    start = parseInt(start);
    if (end) {
      end = parseInt(end);
    } else {
      end = start;
      start = 0;
    }
    step = step == null ? 1 : parseInt(step);
    for (var i = start; i <= end; i += step)
      input.push(i);
    return input;
  };
});