function words(string) {

  var wordArray = string.split(' ');

  wordArray.forEach(countWords);

}
  // wordArray.forEach(function (element, index, array) {
  //   var newArray = {};
  //
  //   if (newArray[element] == 'undefined') {
  //     newArray[element] = 1;
  //   } else {
  //     newArray[element] += 1;
  //   }
  //   return(newArray);
  // });

function countWords(element, index, array) {
  var newArray = {};

  if (newArray[element] == 'undefined') {
    newArray[element] = 1;
  } else {
    newArray[element] += 1;
  }
  return(newArray);
}

  // [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  //   return currentValue;
  // });

  // function logArrayElements(element, index, array) {
  //   console.log('a[' + index + '] = ' + element);
  // }
  //
  // [2, 5, , 9].forEach(logArrayElements);


module.exports = words;
