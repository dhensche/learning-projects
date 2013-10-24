var fs = require('fs');

module.exports = function(app) {
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == "index.js") return;
        var pts = file.split(/\./);
        if (pts[1] != 'js') return;
        require('./' + pts[0])(app);
    });
}