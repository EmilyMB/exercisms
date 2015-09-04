class Bob
  hey: (input) ->
    if empty(input)
      "Fine. Be that way!"
    else if upperCasePhrase(input) && hasLetters(input)
      "Whoa, chill out!"
    else if isQuestion(input)
      "Sure."
    else
      "Whatever."


upperCasePhrase = (input) ->
  input.toUpperCase() is input

isQuestion = (input) ->
  input.slice(-1) is "?"

hasLetters = (input) ->
  /[A-Z]/.test(input)

empty = (input) ->
  !input.trim()

module.exports = Bob
