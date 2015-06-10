var Beer = [];

Beer.verse = function(verse_number) {
  if (verse_number == 0) {
    return lyrics_for_no_bottles;
  } else if (verse_number == 1) {
    return lyrics_for_one_bottle;
  } else if (verse_number == 2) {
    return lyrics_for_two_bottles;
  } else {
    return lyrics(verse_number);
  }
}

Beer.sing = function(start, end) {
  end = typeof end !== 'undefined' ? end: 0;

  all_lyrics = this.verse(start);

  for (var i = start-1; i >= end; i--) {
    all_lyrics += '\n' + this.verse(i);
  }
  return all_lyrics;
};

var lyrics = function(verse) {
  return verse + " bottles of beer on the wall, " +
    verse + " bottles of beer.\nTake one down and pass it around, "+
    (verse - 1) + " bottles of beer on the wall.\n"
};

var lyrics_for_no_bottles = "No more bottles of beer on the wall, " +
  "no more bottles of beer.\nGo to the store and buy some more, " +
  "99 bottles of beer on the wall.\n";

var lyrics_for_one_bottle = "1 bottle of beer on the wall, " +
  "1 bottle of beer.\n" +
  "Take it down and pass it around, no more bottles of beer on the wall.\n";

var lyrics_for_two_bottles = "2 bottles of beer on the wall, " +
  "2 bottles of beer.\n" +
  "Take one down and pass it around, 1 bottle of beer on the wall.\n";

module.exports = Beer;
