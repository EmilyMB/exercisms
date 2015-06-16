var Transform = function(input) {
  var oldKeys = Object.keys(input);
  var transformed = {};

  oldKeys.forEach(function(oldKey, i) {
    var oldValues = input[oldKeys[i]];

    oldValues.forEach(function(val) {
      transformed[val.toLowerCase()] = parseInt(oldKey);
    });
  });
  return transformed;
};

module.exports = Transform;
