class Luhn
  constructor: (input) ->
    @allDigitsReverse = String(input).split('').reverse()
    @checkDigit = Number(@allDigitsReverse[0..][0])
    @addendsReverse = @allDigitsReverse.map (digit, index) ->
      if not (index % 2 is 0)
        if digit > 4
          (2 * digit) - 9
        else
          2 * digit
      else
        1 * digit

    @addends = @addendsReverse.reverse()
    @checksum = @addends.reduce (sum, value) -> sum + value
    @valid = @checksum % 10 == 0

  @create: (input) ->
    shiftedInput = 10 * input
    zeroCheckDigitLuhn = new Luhn(shiftedInput)
    if zeroCheckDigitLuhn.valid
      shiftedInput
    else
      amountNeededToBeValid = 10 - zeroCheckDigitLuhn.checksum % 10
      shiftedInput + amountNeededToBeValid


module.exports = Luhn
