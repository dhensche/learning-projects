app.service('solver', function solver($http, $filter) {
  this.identity = function(d) {return d;};
  this.join = function(d) {return d.join(', ');};
  this.monetized = function(d) {return $filter('currency')(d);};
  
  this.calculate = function calculate(problem) {
    problem.loading = true;
    $http.get(problem.path()).success(function succ(data) {
      problem.result = problem.handler(data);
      problem.loading = false;
    }).error(function err() {
      problem.loading = false;
    });
  }
});