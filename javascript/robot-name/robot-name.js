var Robot = function() {
  this.name = randomName();
};

Robot.prototype.reset = function() {
  this.name = randomName();
};

var randomName = function() {
  var numbers = Math.random().toString(10).substr(2, 3);
  var letters = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);
  return letters.toUpperCase() + numbers;
};

module.exports = Robot;
