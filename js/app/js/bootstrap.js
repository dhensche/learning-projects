'use strict';

(function(){
  $script.path('/js/');
  $script(['lib/angular.min'], function() {
    $script(['app'], function() {
        angular.bootstrap(document, ['app']);
    });
  });
})();