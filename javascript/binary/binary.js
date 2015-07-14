var isBinary = function(input) {
  return input.replace(/[01]/g, '') === '';
};

var Binary = function(input) {
  if(isBinary(input)) {
    this.value = input.split('').map(Number);
  } else {
    this.value = [0];
  }
};

Binary.prototype.toDecimal = function() {
  reverseInput = this.value.reverse();
  return reverseInput.reduce(function(previousValue, currentValue, index) {
    return previousValue + currentValue * Math.pow(2, index);
  });
};

module.exports = Binary;
