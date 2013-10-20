'use strict';
var app = angular.module('problemsApp', []);

app.config(function config($routeProvider) {
  $routeProvider.
    when('/home', {templateUrl: 'views/home.html'}).
    when('/numbers', {templateUrl: 'views/problems.html', controller: 'NumbersControl'}).
    when('/text', {templateUrl: 'views/problems.html'}).
    otherwise({redirectTo: '/home'});
});