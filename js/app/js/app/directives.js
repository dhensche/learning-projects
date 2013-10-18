app.directive('results', function problem() {
  return {
    require: '^ngController',
    restrict: 'EA',
    replace: true,
    template:
    '<div>' + 
      '<h4>Results <i class="icon-rotate-right icon-spin" data-ng-show="loading"></i></h4>' +
      '<pre data-ng-show="result != null">{{ result }}</pre>' +
    '</div>'
  }
});

app.directive('accordion', function accordion() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    controller: function link($scope, $element) {
      var panels = $scope.panels = [];
      $scope.id = "acc-" + $scope.$id;
      
      this.addPanel = function(panel) {
        panel.parent = $scope.id;
        panels.push(panel);
      }
    },
    template:
    '<div class="panel-group" id="{{ id }}" data-ng-transclude></div>'
  }
});

app.directive('panel', function panel() {
  return {
    require: '^accordion',
    restrict: 'EA',
    transclude: true,
    scope: {title: '@'},
    replace: true,
    link: function link(scope, e, attrs, accCtrl) {
      var id = e.attr("id");
      if (!id) {
        id = "panel-" + scope.$id;
      }
      
      scope.id = id;
      accCtrl.addPanel(scope);
    },
    template:
    '<div class="panel panel-default">' +
      '<div class="panel-heading">' + 
        '<h4 class="panel-title">' +
          '<a class="accordion-toggle" data-toggle="collapse" data-parent="#{{ parent }}" href="#{{ id }}">{{ title }}</a>' +
        '</h4>' +
      '</div>' +
      '<div class="panel-collapse collapse" id="{{ id }}">' +
        '<div class="panel-body" data-ng-transclude></div>' +
      '</div>' +
    '</div>'
  }
});

app.directive('problem', function panel() {
  return {
    require: '^ngController',
    restrict: 'EA',
    transclude: true,
    replace: true,
    template:
    '<form data-ng-submit="calculate()">' +
      '<div data-ng-transclude></div>' +
      '<results></results>' +
    '</form>'
  }
})