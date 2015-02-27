function words(string) {
  var allWords = string.split(/[\s]+/);
  var wordsCount = {};

  allWords.forEach(function(word) {
      wordsCount[word] = ++wordsCount[word] || 1;
  });
  return(wordsCount)
}

module.exports = words;
