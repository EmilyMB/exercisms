var Age = function(seconds) {
  this.seconds = seconds;
  this.earthAge = seconds / 31557600.00;
};

var roundNumber = function(number) {
  return Math.round(number * 100) / 100;
};

const ageInEarthYears = {
  'Earth': 1,
  'Mercury': 0.2408467,
  'Venus': 0.61519726,
  'Mars': 1.8808158,
  'Jupiter': 11.862615,
  'Saturn': 29.447498,
  'Uranus': 84.016846,
  'Neptune': 164.79132
};

Object.keys(ageInEarthYears).forEach(function(planet, index) {
  Age.prototype['on' + planet] = function() {
    return roundNumber(this.earthAge / ageInEarthYears[planet]);
  };
});

module.exports = Age;
