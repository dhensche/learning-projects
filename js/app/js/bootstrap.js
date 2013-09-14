// This file will be loaded from index.html
$script.path('/js/')
$script(['app'], function() {
    angular.bootstrap(document, ['app']);
});
