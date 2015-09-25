class Trinary
  constructor: (input) ->
    if invalidBinary(input)
      @input = '0'
    else
      @input = input

  toDecimal: () ->
    reverse_input = @input.split('').map(Number).reverse()
    reverse_input.reduce (prev, curr, index) ->
      prev + curr * Math.pow(3, index)

  invalidBinary = (input) ->
    input.replace(/[012]/g, '')

module.exports = Trinary
