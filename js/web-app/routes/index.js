var fs = require('fs');

module.exports = function(app) {
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == "index.js") return;
        var pts = file.split(/\./);
        if (pts[1] != 'js') return;
        var ctrl = require('./' + pts[0]);
        ctrl.endpoints.forEach(function(endpoint) {
          var path = "/" + pts[0];
          if (endpoint.path.constructor == RegExp) {
            path = new RegExp(path + endpoint.path)
          } else {
            path = path + endpoint.path
          }
          app[endpoint.method](path, endpoint.handler);
        });
    });
}