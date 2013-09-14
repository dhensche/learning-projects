(function() {
  var Controller = angular.module('app').lazy.controller;
  
  Controller('PiDigitsCtrl', function($scope, $http) {
    $scope.calculate = function() {
      $scope.loading = true;
      $http.get('/pi-digits/' + $scope.n).
        success(function(data) {
          $scope.result = data;
          $scope.loading = false;
        });
    }
  });

  Controller('PrimeFactorsCtrl', function($scope, $http) {
    $scope.calculate = function() {
      $scope.loading = true;
      $http.get('/prime-factors/' + $scope.n).
        success(function(data) {
          $scope.result = data.join(', ');
          $scope.loading = false;
        });
    }
  });
})();