function at(hour, minutes) {
  minutes = typeof minutes !== 'undefined' ? minutes : 0;
  var clock = Object.create(null);
  var totalMinutes = 60 * hour + minutes;

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  clock.toString = function() {
    var newHour = Math.floor(totalMinutes / 60) % 24;
    var newMinutes = totalMinutes % 60;
    return ('00' + newHour).substr(-2,2) + ':' + ('00' + newMinutes).substr(-2,2);
  },

  clock.plus = function(addedMinutes) {
    totalMinutes = totalMinutes + addedMinutes;
    return clock;
  },

  clock.minus = function(minusMinutes) {
    var minutesInDay = 24 * 60;
    totalMinutes = mod((totalMinutes - minusMinutes), minutesInDay);
    return clock;
  },

  clock.equals = function(clock2) {
    return clock.toString() === clock2.toString();
  }

  return Object.create(clock);
}

module.exports.at = at;
