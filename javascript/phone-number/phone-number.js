var Phone = function(input) {
  this.number = function() {
    return clean_number(input);
  },
  this.areaCode = function() {
    return this.number().slice(0, 3);
  },
  this.toString = function() {
    return '(' + this.areaCode() + ') '
      + this.number().slice(3, 6) + '-'
      + this.number().slice(6, 10);
  }
};

var clean_number = function(input) {
  var only_digits = input.replace(/\D/g,'');
  if (only_digits.length === 10) {
    return only_digits;
  } else if (only_digits.length === 11 && only_digits.charAt(0) == '1') {
    return only_digits.slice(1);
  } else {
    return '0000000000';
  }
}

module.exports = Phone;
