var routes = [];
var normalizedPath = path.join(process.cwd(), 'routes');

fs.readdirSync(normalizedPath).forEach(function(file) {
  routes.push(require('../routes/' + file));
});

module.exports = routes;
