// call modules
require('./system/modules');

// template engine
app.set('view engine', 'ejs');

// serving static files
app.use(express.static('public'));

// load routes
app.use(routes);

// set port
app.listen(process.env.PORT || 3000);
