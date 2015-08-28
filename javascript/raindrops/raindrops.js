var Raindrops = function() {};

Raindrops.prototype.convert = function(input) {
  var output = '';
  DIVISORS.forEach(function(divisor){
    if (input % divisor === 0) {
      output += DICTIONARY[divisor];
    }
  });

  return output || String(input);
}

var DICTIONARY = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
};

var DIVISORS = Object.keys(DICTIONARY);

module.exports = Raindrops;
