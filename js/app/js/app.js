'use strict';
angular.module('martyr', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/home', {templateUrl: 'views/home.html'}).
      otherwise({redirectTo: '/home'});
  }]);