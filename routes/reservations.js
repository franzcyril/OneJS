router.get('/reservations', function(req, res){
  database(function(err, connection){
    connection.connect();
    connection.query('SELECT * FROM reservation', function(err, rows, fields){
      res.render('reservations', {reservations: rows});
    });
    connection.release();
  });
});

module.exports = router;
