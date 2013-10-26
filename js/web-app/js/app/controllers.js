'use strict';

app.controller('NavBarCtrl', function NavBarCtrl($scope, $location) {
  $scope.active = function active(path) {
    return $location.path().substr(0, path.length) === path
  }
});

app.controller('NumbersControl', function NumbersControl($scope, solver) {
  $scope.title = 'Numbers';
  $scope.solver = solver;
  $scope.problems = [
    {
      title: 'Find the prime factors of N',
      form: 'views/problems/single-input.html',
      label: 'N',
      data: {},
      path: function path() {return '/prime-factors/' + this.data.n;},
      handler: solver.join
    },
    {
      title: 'Find PI to the Nth Digit',
      form: 'views/problems/single-input.html',
      label: 'Number of Digits',
      data: {},
      path: function path() {return '/pi-digits/' + this.data.n;},
      handler: solver.identity
    },
    {
      title: 'First N numbers in Fibonacci sequence',
      form: 'views/problems/single-input.html',
      label: 'N',
      data: {},
      path: function path() {return '/fibonacci/' + this.data.n;},
      handler: solver.join
    },
    {
      title: 'Find the next prime after N',
      form: 'views/problems/single-input.html',
      label: 'N',
      data: {},
      path: function path() {return '/next-prime/' + this.data.n;},
      handler: solver.identity
    },
    {
      title: 'Cost to floor a room with tiles',
      form: 'views/problems/numbers/tile-cost.html',
      data: {},
      path: function path() {
        return ['/tile-cost',
                this.data.cost, 
                this.data.length, 
                this.data.width].join('/');
      },
      handler: solver.monetized
    }, 
    {
      title: 'Monthly fee for a fixed rate mortgage',
      form: 'views/problems/numbers/mortgage.html',
      data: {},
      path: function path() {
        return [['/mortgage',
                this.data.principal,
                this.data.rate / 100,
                this.data.length,
                this.data.periods].join('/'),
                '?action=', this.data.action,
                '&payment=', this.data.payment].join('');
      },
      handler: function transform(data) {
        if (this.data.action === 'monthlyPayment') {
          return solver.monetized(data);
        } else {
          return data + ' payments left';
        }
          
      }
    },
    {
      title: 'Calculate change (denominations from $100 to $0.01)',
      form: 'views/problems/numbers/change.html',
      path: function path() {
        return ['/change',
                this.data.cash,
                this.data.price].join('/');
      },
      handler: function transform(data) {
        return data.map(function mapChange(d) {
          var label = d.count == 1 ? d.label : (d.label === 'penny' ? 'pennies' : d.label + 's');
          return d.count + ' ' + label;
        }).join('\n');
      }
    },
    {
      title: 'Convert numbers between any bases between 2 and 36',
      form: 'views/problems/numbers/convert.html',
      data: {},
      path: function path() {
        return ['/convert',
                this.data.n,
                this.data.inputBase,
                this.data.outputBase
                ].join('/');
      },
      handler: solver.identity
    }
  ]
});