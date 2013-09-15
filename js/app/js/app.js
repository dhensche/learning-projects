'use strict';

(function() {
  var app = angular.module('app', []),
      loaded = [];

  function async(file) {
    return {
      load: ['$q', '$rootScope', function($q, $rootScope) {
        if (~loaded.indexOf(file)) return;
        
        var deferred = $q.defer();
    
        $script([file], function() {
            loaded.push(file);
            $rootScope.$apply(function()
            {
              deferred.resolve();
            });
        });
  
        return deferred.promise;
      }]
    };
  }

  app.config(function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
    // save references to the providers
    app.lazy = {
      controller: $controllerProvider.register,
      directive: $compileProvider.directive,
      filter: $filterProvider.register,
      factory: $provide.factory,
      service: $provide.service,
    };
    
    $routeProvider.
      when('/home', {templateUrl: 'views/home.html'}).
      when('/numbers', {templateUrl: 'views/numbers.html', resolve: async('numbers')}).
      when('/text', {templateUrl: 'views/text.html', resolve: async('text')}).
      otherwise({redirectTo: '/home'});
      
  });
  
  app.run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(e, current) {
      $rootScope.path = location.hash;
    });
  });
})();