'use strict';

app.controller('NavBarCtrl', function NavBarCtrl($scope, $location) {
  $scope.active = function active(path) {
    return $location.path().substr(0, path.length) === path
  }
});

app.controller('NumbersControl', function NumbersControl($scope, solver) {
  $scope.solver = solver;
  $scope.problems = [
    {
      title: 'Find the prime factors of N',
      fields: {
        n: {
          label: 'N'
        }
      },
      path: function path() {return '/prime-factors/' + this.fields.n.data;},
      handler: solver.join
    }, {
      title: 'Find PI to the Nth Digit',
      fields: {
        n: {
          label: 'Number of Digits'
        }
      },
      path: function path() {return '/pi-digits/' + this.fields.n.data;},
      handler: solver.identity
    }, {
      title: 'First N numbers in Fibonacci sequence',
      fields: {
        n: {
          label: 'N'
        }
      },
      path: function path() {return '/fibonacci/' + this.fields.n.data;},
      handler: solver.join
    }, {
      title: 'Find the next prime after N',
      fields: {
        n: {
          label: 'N'
        }
      },
      path: function path() {return '/next-prime/' + this.fields.n.data;},
      handler: solver.identity
    }, {
      title: 'Cost to floor a room with tiles',
      fields: {
        cost: {
          label: 'Tile Cost'
        }, length: {
          label: 'Length of Room'
        }, width: {
          label: 'Width of Room'
        }
      },
      path: function path() {
        return ['/tile-cost',
                this.fields.cost.data, 
                this.fields.length.data, 
                this.fields.width.data].join('/');
      },
      handler: solver.monetized
    }
  ]
});