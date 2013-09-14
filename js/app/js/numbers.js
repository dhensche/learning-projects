angular.module('app').lazy.controller('PiDigitsCtrl', function($scope) {
  $scope.calculate = function() {
    $scope.result = $scope.n * 314;
  }
});