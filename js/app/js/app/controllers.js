'use strict';

app.controller('NavBarCtrl', function NavBarCtrl($scope, $location) {
  $scope.active = function active(path) {
    return $location.path().substr(0, path.length) === path
  }
});

app.controller('NumbersControl', function NumbersControl($scope, $http) {
  $scope.problems = {
    'pi-digits': {
      title: 'Find PI to the Nth Digit',
      label: 'Number of Digits',
      url: '/pi-digits/',
      result: '',
      handle: function(d) {
        return d;
      }
    },
    'prime-factors': {
      title: 'Find the prime factors of N',
      url: '/prime-factors/',
      label: 'N',
      result: '',
      handle: function(d) {
        return d.join(', ');
      }
    }
  }
  
  $scope.calculate = function calculate(id) {
    var problem = $scope.problems[id];
    if (problem) {
      $scope.loading = true;
      $http.get(problem.url + problem.n)
      .success(function succ(data) {
        problem.result = problem.handle(data);
        $scope.loading = false;
      });
    }
  }
});
