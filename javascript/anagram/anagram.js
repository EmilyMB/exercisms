var Anagram = function(input) {
  this.input = input.toLowerCase();
  this.matches = function(possible_anagrams) {
    if (typeof arguments[0] == 'string') {
      possible_anagrams = Array.prototype.slice.call(arguments);
    }
    return possible_anagrams.filter(isAnagram);
  };
  return this;
};

function isAnagram(word) {
  if(word.toLowerCase() != input) {
    return sortWord(word) == sortWord(input);
  } else { return false; }
};

function sortWord(word) {
  return word.toLowerCase().split("").sort().join();
};

module.exports = Anagram;
