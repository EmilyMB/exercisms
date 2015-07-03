var Clock = function(minutes) {
  this.totalMinutes = minutes;
};

function at(hour, minutes) {
  minutes = typeof minutes !== 'undefined' ? minutes : 0;
  var totalMinutes = 60 * hour + minutes;

  return new Clock(totalMinutes);
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

Clock.prototype.toString = function() {
  var newHour = Math.floor(this.totalMinutes / 60) % 24;
  var newMinutes = this.totalMinutes % 60;
  return ('00' + newHour).substr(-2,2) + ':' + ('00' + newMinutes).substr(-2,2);
}

Clock.prototype.plus = function(addedMinutes) {
  this.totalMinutes += addedMinutes;
  return this;
}

Clock.prototype.minus = function(minusMinutes) {
  var minutesInDay = 24 * 60;
  this.totalMinutes = mod((this.totalMinutes - minusMinutes), minutesInDay);
  return this;
}

Clock.prototype.equals = function(clock2) {
  return this.toString() === clock2.toString();
}
module.exports.at = at;
