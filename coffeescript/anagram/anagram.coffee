class Anagram
  constructor: (input) ->
    @input = input.toLowerCase()

  match: (possible_matches) ->
    possible_matches = possible_matches.map (word) -> word.toLowerCase()
    possible_matches.filter (possible_match) =>
      possible_match != @input and
      alphabetize(possible_match) == alphabetize(@input)

alphabetize = (word) ->
  word.split('').sort().join('')

module.exports = Anagram
