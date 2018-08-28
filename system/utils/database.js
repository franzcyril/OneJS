var mysql = require('mysql');

connection = config.database
var pool = mysql.createPool({
  connectionLimit: 100,
  host: connection.host,
  user: connection.user,
  password: connection.password,
  database: connection.database,
});

module.exports = function(callback){
  pool.getConnection(function(err, connection){
    callback(err, connection);
  });
}

module.exports.query = function(stmt, callback){
  database(function(err, connection){
    connection.connect();
    connection.query(stmt, function(err, rows, fields){
      callback(err, rows, fields);
    });
    connection.release();
  });
}
