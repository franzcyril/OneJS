module.exports = {
  getPayments: function(personid = ''){
    return "SELECT SalesInvoiceNo, AmountPaid FROM payment LEFT JOIN reservation ON reservation.ReservationId = payment.ReservationId WHERE reservation.PersonId = " + personid;
  }
}

module.exports.name = path.basename(__filename, '.js');
