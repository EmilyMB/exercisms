var Grains = function() {};

Grains.prototype.square = function(input) {
  return Math.pow(2, input - 1);
};

Grains.prototype.total = function() {
  return geometric_sum(64, 2);
};

var geometric_sum = function(number, exponential) {
  return (1 - Math.pow(exponential, number))/(1 - exponential);
}

module.exports = Grains;
