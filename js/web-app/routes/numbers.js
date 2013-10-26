var PiDigits = require('../../Numbers/pi-digits'),
    PrimeFactors = require('../../Numbers/prime-factors'),
    TileCost = require('../../Numbers/tile-cost'),
    NextPrime = require('../../Numbers/next-prime'),
    Fibonacci = require('../../Numbers/fibonacci'),
    Mortgage = require('../../Numbers/mortgage'),
    Change = require('../../Numbers/change'),
    Converter = require('../../Numbers/converter');
    
exports.endpoints = [
  {
    path: '/pi-digits/:n',
    method: 'get',
    handler: function handler(req, res) {
      var n = parseInt(req.params.n, 10);
      res.send(PiDigits.digits(n).toString());
    }
  },
  {
    path: '/next-prime/:n',
    method: 'get',
    handler: function handler(req, res) {
      res.send(NextPrime.nextPrime(req.params.n).toString());
    }
  },
  {
    path: '/prime-factors/:n',
    method: 'get',
    handler: function handler(req, res) {
      res.json(PrimeFactors.
        generate(req.params.n).
        map(function(factor) {
          return factor.toString();
        })
      );
    }
  },
  {
    path: '/fibonacci/:n',
    method: 'get',
    handler: function handler(req, res) {
      var n = parseInt(req.params.n, 10);
      res.send(Fibonacci.firstN(n).
        map(function(factor) {
          return factor.toString();
        })
      );
    }
  },
  {
    path: /tile-cost\/(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)/,
    method: 'get',
    handler: function handler(req, res) {
      res.send(TileCost.cost(req.params[2], req.params[1], req.params[0]));
    }
  },
  {
    path: /mortgage\/(\d+(?:\.\d+)?)\/(0?(?:\.\d+))\/(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)/,
    method: 'get',
    handler: function handler(req, res) {
      var mortgage = new Mortgage(req.params[0], req.params[1], req.params[2], req.params[3]);
      res.send(mortgage[req.query.action](req.query.payment).toString());
    }
  },
  {
    path: /change\/([\d.]+)\/([\d.]+)/,
    method: 'get',
    handler: function handler(req, res) {
      res.send(Change.calculate(parseFloat(req.params[0]), parseFloat(req.params[1])));
    }
  },
  {
    path: /convert\/(-?[a-zA-Z0-9]+)\/(\d+)\/(\d+)/,
    method: 'get',
    handler: function handler(req, res) {
      res.send(Converter.convert(req.params[0], req.params[1], req.params[2]));
    }
  }
]