var dna = function(input) {

  if (typeof input !== "undefined" && input.replace(/A|T|C|G/g,'') !== '') {
    throw 'Invalid input';
  }

  return {
    count: function(target) {
      return this.histogram()[target];
    },

    histogram: function() {
      return countLetters();
    }
  }

  function countLetters() {
    var letterCount = {A: 0, T: 0, C: 0, G: 0};

    if (typeof input !== 'undefined') {
      var allLetters = input.split('');

      allLetters.forEach(function(letter) {
        letterCount[letter] = ++letterCount[letter];
      });
    }
    return letterCount;
  }
};

module.exports = dna;
