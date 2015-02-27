function words(string) {
  var wordArray = string.split(/[\s]+/);
  var newArray = {};

  wordArray.forEach(function(word) {
    if (newArray[word] === undefined) {
      newArray[word] = 1;
    } else {
      newArray[word] += 1;
    }
  });
  return(newArray)
}

module.exports = words;
