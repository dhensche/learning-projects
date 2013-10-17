'use strict';

app.controller('NavBarCtrl', function NavBarCtrl($scope, $location) {
  $scope.active = function active(path) {
    return $location.path().substr(0, path.length) === path
  }
});

app.controller('PiDigitsCtrl', function PiDigitsCtrl($scope, $http) {
  $scope.calculate = function() {
    $scope.loading = true;
    $http.get('/pi-digits/' + $scope.n)
      .success(function(data) {
        $scope.result = data;
        $scope.loading = false;
      });
  }
});

app.controller('PrimeFactorsCtrl', function PrimeFactorsCtrl($scope, $http) {
  $scope.calculate = function() {
    $scope.loading = true;
    $http.get('/prime-factors/' + $scope.n)
      .success(
        function(data) {
        $scope.result = data.join(', ');
        $scope.loading = false;
      });
  }
})
