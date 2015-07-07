var POINTS = {};

function setValue(letters, value) {
  letters.forEach(function(letter) {
    POINTS[letter] = value;
  });
}

var pointSets = [
  [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1],
  [['D', 'G'], 2],
  [['B', 'C', 'M', 'P'], 3],
  [['F', 'H', 'V', 'W', 'Y'], 4],
  [['K'], 5],
  [['J', 'X'], 8],
  [['Q', 'Z'], 10]
];

pointSets.forEach(function(pointSet) {
  setValue(pointSet[0], pointSet[1]);
});

var score = function(word) {
  var total = 0;
  if (word) {
    var letters = word.toUpperCase().split('');
    letters.forEach(function(letter) {
      total += POINTS[letter];
    });
  }

  return total;
};

module.exports = score;
