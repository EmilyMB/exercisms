var Song = function() {};

Song.prototype.verse = function(verse_number) {
  cumulative = unique_lines[verse_number - 1];

  if (verse_number > 7) {
    return cumulative;
  }
  return cumulator(cumulative, verse_number);
};

function cumulator(base, verse) {
  for (var i = verse - 1; i >= 0; i--) {
    base += repeatable_lines[i];
  }
  return base;
};

Song.prototype.verses = function(start, end) {
  all = ""
  for (var i = start; i <= end; i++) {
    all += this.verse(i) + "\n";
  }
  return all;
};

var unique_lines = ["I know an old lady who swallowed a fly.",
  "I know an old lady who swallowed a spider.\n" +
  "It wriggled and jiggled and tickled inside her.\n",
  "I know an old lady who swallowed a bird.\n" +
  "How absurd to swallow a bird!\n",
  "I know an old lady who swallowed a cat.\n" +
  "Imagine that, to swallow a cat!\n",
  "I know an old lady who swallowed a dog.\n" +
  "What a hog, to swallow a dog!\n",
  "I know an old lady who swallowed a goat.\n" +
  "Just opened her throat and swallowed a goat!\n",
  "I know an old lady who swallowed a cow.\n" +
  "I don't know how she swallowed a cow!\n",
  "I know an old lady who swallowed a horse.\n" +
  "She's dead, of course!\n"]

var repeatable_lines = ["\nI don't know why she swallowed the fly. " +
  "Perhaps she'll die.\n",
  "She swallowed the spider to catch the fly.",
  "She swallowed the bird to catch the spider that " +
  "wriggled and jiggled and tickled inside her.\n",
  "She swallowed the cat to catch the bird.\n",
  "She swallowed the dog to catch the cat.\n",
  "She swallowed the goat to catch the dog.\n",
  "She swallowed the cow to catch the goat.\n"]

module.exports = new Song();
