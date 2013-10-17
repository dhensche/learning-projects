var PiDigits = require('../../Numbers/pi-digits'),
    PrimeFactors = require('../../Numbers/prime-factors'),
    TileCost = require('../../Numbers/tile-cost'),
    NextPrime = require('../../Numbers/next-prime'),
    Fibonacci = require('../../Numbers/fibonacci.js');

module.exports = function(app){
    app.get('/pi-digits/:n', function(req, res) {
      var n = parseInt(req.params.n, 10);
      res.send(PiDigits.digits(n).toString());
    });
    
    app.get('/next-prime/:n', function(req, res) {
      res.send(NextPrime.nextPrime(req.params.n).toString());
    });
    
    app.get('/prime-factors/:n', function(req, res) {
      res.json(PrimeFactors.
        generate(req.params.n).
        map(function(factor) {
          return factor.toString();
        })
      );
    });
    
    app.get('/fibonacci/:n', function(req, res) {
      var n = parseInt(req.params.n, 10);
      res.send(Fibonacci.firstN(n).
        map(function(factor) {
          return factor.toString();
        })
      );
    });
    
    app.get(/tile-cost\/(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)/, function(req, res) {
      res.send(TileCost.cost(req.params[2], req.params[1], req.params[0]));
    });
}