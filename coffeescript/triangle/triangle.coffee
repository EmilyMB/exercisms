class Triangle
  constructor: (side1, side2, side3) ->
    @side1 = side1
    @side2 = side2
    @side3 = side3
    @sides = [side1, side2, side3].sort (a, b) -> a - b
    @check_validity()

  kind: ->
    if @no_sides_equal()
      'scalene'
    else if @all_sides_equal()
      'equilateral'
    else
      'isosceles'

  no_sides_equal: ->
    (@side1 isnt @side2) and (@side1 isnt @side3) and (@side2 isnt @side3)

  all_sides_equal: ->
    @side1 is @side2 and @side1 is @side3

  check_validity: ->
    negative_sides = (side for side in @sides when side < 0)
    if negative_sides.length > 0
      throw 'negative sides are illegal'

    if @sides[0] + @sides[1] <= @sides[2]
      throw 'violation of triangle inequality'



module.exports = Triangle
