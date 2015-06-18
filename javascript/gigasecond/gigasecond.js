var Gigasecond = function(birthdate) {

  this.date = function() {
    birthdate.setDate(birthdate.getDate() + gigasecondInDays);
    return birthdate;
  };

};

const gigasecondInDays = Math.pow(10, 9) / (60 * 60 * 24);

module.exports = Gigasecond;
