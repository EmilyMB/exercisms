ONES = {
  0: '',
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX'
}

TENS = {
  0: '',
  1: 'X',
  2: 'XX',
  3: 'XXX',
  4: 'XL',
  5: 'L',
  6: 'LX',
  7: 'LXX',
  8: 'LXXX',
  9: 'XC'
}

HUNDREDS = {
  0: '',
  1: 'C',
  2: 'CC',
  3: 'CCC',
  4: 'CD',
  5: 'D',
  6: 'DC',
  7: 'DCC',
  8: 'DCCC',
  9: 'CM'
}

THOUSANDS = {
  0: '',
  1: 'M',
  2: 'MM',
  3: 'MMM'
}

var toRoman = function(input) {
  input = input.toString().split('').reverse();
  thousands = input[3] || 0;
  hundreds = input[2] || 0;
  tens = input[1] || 0;
  ones = input[0];
  return THOUSANDS[thousands] + HUNDREDS[hundreds] + TENS[tens] + ONES[ones];
}

module.exports = toRoman;