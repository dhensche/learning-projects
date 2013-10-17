app.service('solver', function solver($http, $filter) {
  this.identity = function(d) {return d;};
  this.join = function(d) {return d.join(', ');};
  this.monetized = function(d) {return $filter('currency')(d);};
  
  this.calculate = function calculate($scope, path, handler) {
    return function() {
      $scope.loading = true;
      $http.get(path()).success(function succ(data) {
        $scope.result = handler(data);
        $scope.loading = false;
      }).error(function err() {
        $scope.loading = false;
      });
    }
  }
});