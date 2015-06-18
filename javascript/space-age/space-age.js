var Age = function(seconds) {
  this.seconds = seconds;
  this.earthAge = seconds / 31557600.00;
};

Age.prototype.onEarth = function() {
  return roundNumber(this.earthAge);
};

Age.prototype.onMercury = function() {
  var number = this.earthAge / 0.2408467;
  return roundNumber(number);
};

Age.prototype.onVenus = function() {
  var number = this.earthAge / 0.61519726;
  return roundNumber(number);
};

Age.prototype.onMars = function() {
  var number = this.earthAge / 1.8808158;
  return roundNumber(number);
};

Age.prototype.onJupiter = function() {
  var number = this.earthAge / 11.862615;
  return roundNumber(number);
};

Age.prototype.onSaturn = function() {
  var number = this.earthAge / 29.447498;
  return roundNumber(number);
};

Age.prototype.onUranus = function() {
  var number = this.earthAge / 84.016846;
  return roundNumber(number);
};

Age.prototype.onNeptune = function() {
  var number = this.earthAge / 164.79132;
  return roundNumber(number);
};

var roundNumber = function(stuff) {
  return Math.round(stuff * 100) / 100 ;
};
module.exports = Age;
