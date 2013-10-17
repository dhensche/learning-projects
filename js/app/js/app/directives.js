app.directive('results', function problem() {
  return {
    require: '^ngController',
    restrict: 'A',
    replace: true,
    template:
    '<div>' + 
      '<h4>Results <i class="icon-rotate-right icon-spin" data-ng-show="loading"></i></h4>' +
      '<pre data-ng-show="result != null">{{ result }}</pre>' +
    '</div>'
  }
});

app.directive('panel', function panel() {
  return {
    restrict: 'A',
    scope: {title: '@'},
    transclude: true,
    replace: true,
    template:
    '<div class="panel panel-default">' +
      '<div class="panel-heading"><h3 class="panel-title">{{ title }}</h3></div>' +
      '<div class="panel-body" data-ng-transclude></div>' +
    '</div>'
  }
});

app.directive('problem', function panel() {
  return {
    require: '^ngController',
    restrict: 'A',
    transclude: true,
    link: function link(scope, e, attrs, ctrl) {
      scope.title = attrs.title;
    },
    template:
    '<div data-panel data-title="{{ title }}">' +
      '<form data-ng-submit="calculate()">' +
        '<div data-ng-transclude></div>' +
      '</form>' +
      '<div data-results></div>' +
    '</div>'
  }
})