class Words
  constructor: (input) ->
    @words = input.replace(/[^\w\s]/g, '' ).split(/\s+/)
    @wordCount = {}

  count: () ->
    @wordCount[word] = ++@wordCount[word] or 1 for word in @normalizedWords()
    @wordCount

  normalizedWords: () ->
    @words.map (word) -> word.toLowerCase()

module.exports = Words
