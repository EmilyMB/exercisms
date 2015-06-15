var leapYear = function(year) {
  var regularLeap = (year % 4 === 0);
  var century = (year % 100 === 0);
  var fourCentury = (year % 400 === 0);

  return (regularLeap && !century) || fourCentury;
};

module.exports = leapYear;
