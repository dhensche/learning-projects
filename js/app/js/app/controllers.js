'use strict';

app.controller('NavBarCtrl', function NavBarCtrl($scope, $location) {
  $scope.active = function active(path) {
    return $location.path().substr(0, path.length) === path
  }
});

app.controller('PrimeFactorsCtrl', function PrimeFactorsCtrl($scope, $http, solver) {
  $scope.data = {};
  function path() {return '/prime-factors/' + $scope.data.n;};
  $scope.calculate = solver.calculate($scope, path, solver.join);
});
app.controller('PiDigitsCtrl', function PiDigitsCtrl($scope, $http, solver) {
  $scope.data = {};
  function path() {return '/pi-digits/' + $scope.data.n;};
  
  $scope.calculate = solver.calculate($scope, path, solver.identity);
});

app.controller('FibonacciCtrl', function PiDigitsCtrl($scope, $http, solver) {
  $scope.data = {};
  function path() {return '/fibonacci/' + $scope.data.n;};
  
  $scope.calculate = solver.calculate($scope, path, solver.join);
});

app.controller('TileCostCtrl', function TileCostCtrl($scope, $http, solver) {
  $scope.data = {};
  function path() {
    return ['/tile-cost',$scope.data.cost, $scope.data.length, $scope.data.width].join('/');
  };
  $scope.calculate = solver.calculate($scope, path, solver.identity);
});