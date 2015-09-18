class Binary
  constructor: (input) ->
    if invalidBinary(input)
      @input = '0'
    else
      @input = input

  toDecimal: () ->
    reverse_input = @input.split('').map(Number).reverse()
    reverse_input.reduce (prev, curr, index) ->
      prev + curr * Math.pow(2, index)

invalidBinary = (input) ->
  input.replace(/[01]/g, '')

module.exports = Binary
