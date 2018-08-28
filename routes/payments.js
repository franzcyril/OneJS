router.get('/payments', function(req, res){
  database.query(
    model.paymentModel.getPayments(9),
    function(err, rows, fields){
      res.render('payments', {payments: rows});
    }
  );
});

module.exports = router;
