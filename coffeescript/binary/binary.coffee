class Binary
  constructor: (input) ->
    if invalidBinary(input)
      @input = '0'
    else
      @input = input

  toDecimal: () ->
    @input.split('').map(Number).reduce (prev, curr) ->
      prev * 2 + curr

invalidBinary = (input) ->
  /[^01]/.test(input)

module.exports = Binary
