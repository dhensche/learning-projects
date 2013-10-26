'use strict';

app.directive('accordion', function accordion() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    controller: function link($scope, $element, $attrs) {
      var panels = $scope.panels = [];
      
      $scope.id = $attrs.id || "acc-" + $scope.$id;
      $element.attr('id', $scope.id);
      
      this.addPanel = function(panel) {
        panel.parent = $scope.id;
        panels.push(panel);
      }
    },
    template:
    '<div class="panel-group" data-ng-transclude></div>'
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
      scope.id = attrs.id || 'panel-' + scope.$id;
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