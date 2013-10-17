var PiDigits = require('../../Numbers/pi-digits'),
    PrimeFactors = require('../../Numbers/prime-factors');

module.exports = function(app){
    app.get('/pi-digits/:n', function(req, res) {
      var n = parseInt(req.params.n, 10);
      res.send(PiDigits.digits(n).toString());
    });
    
    app.get('/prime-factors/:n', function(req, res) {
      res.json(PrimeFactors.
        generate(req.params.n).
        map(function(factor) {
          return factor.toString();
        })
      );
    });
}