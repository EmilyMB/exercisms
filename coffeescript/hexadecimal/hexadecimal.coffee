class Hexadecimal
  constructor: (input) ->
    if invalid_hex(input)
      @input = [0]
    else
      @input = hex_values(input.split('').reverse())

  toDecimal: () ->
    @input.reduce (prev, curr, index) ->
      prev + curr * Math.pow(16, index)

hex_values = (input) ->
  result = []
  for value in input
    if !isNaN(value)
      result.push(Number(value))
    else
      result.push(HEX_TO_DECIMAL[value])
  result

invalid_hex = (input) ->
  input.replace(/[0-9a-f]/g, '')

HEX_TO_DECIMAL = {
  'a': 10,
  'b': 11,
  'c': 12,
  'd': 13,
  'e': 14,
  'f': 15
}

module.exports = Hexadecimal
