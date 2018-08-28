var models = [];
var normalizedPath = path.join(process.env.PWD, 'models');

fs.readdirSync(normalizedPath).forEach(function(file) {
  var m = require('../models/' + file);
  models[m.name] = m;
});

module.exports = models;
