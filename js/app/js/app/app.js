'use strict';
var app = angular.module('problemsApp', []);

app.config(function config($routeProvider) {
  $routeProvider.
    when('/home', {templateUrl: 'views/home.html'}).
    when('/numbers', {templateUrl: 'views/numbers.html', controller: 'NumbersControl'}).
    when('/text', {templateUrl: 'views/text.html'}).
    otherwise({redirectTo: '/home'});
});