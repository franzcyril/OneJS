router.get('/personcontact', function(req, res){
  database.query(
    model.personModel.getPersonContact(24),
    function(err, rows, fields){
      res.render('persons', {data: rows});
    }
  );
});

module.exports = router;
