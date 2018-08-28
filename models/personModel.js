module.exports = {
  getPersons: function(personid = ''){
    return "SELECT * FROM person WHERE PersonId = " + personid;
  },
  getPersonContact: function(personid = ''){
    return "SELECT * FROM personcontact WHERE PersonId = " + personid;
  }
}

module.exports.name = path.basename(__filename, '.js');
