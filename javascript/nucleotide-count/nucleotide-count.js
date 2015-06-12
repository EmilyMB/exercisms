var dna = function(input) {

  if (input && input.replace(/A|T|C|G/g,'') !== '') {
    throw 'Invalid input';
  }

  var countLetters = function() {
    var letterCount = {A: 0, T: 0, C: 0, G: 0};

    if (input) {
      var allLetters = input.split('');

      allLetters.forEach(function(letter) {
        letterCount[letter] = ++letterCount[letter];
      });
    }
    return letterCount;
  }

  return {
    count: function(target) {
      return this.histogram()[target];
    },

    histogram: function() {
      return countLetters();
    }
  }
};

module.exports = dna;
