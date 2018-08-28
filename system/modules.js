// nodejs modules
global.express  = require('express');
global.router   = express.Router();
global.app      = express();
global.fs       = require('fs');
global.path     = require('path');

// set globals
global.config   = require('../config');
global.database = require('./utils/database');
global.routes   = require('./routes');
global.model    = require('./models');
