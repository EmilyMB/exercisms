var sidesNotValid = function(sides) {
  return (sides[0] <= 0);
}

var triangleInequality = function(sides) {
  return (sides[0] + sides[1] < sides[2]);
}

var Triangle = function(side1, side2, side3) {
  var sides = [arguments[0], arguments[1], arguments[2]].sort();

  this.kind = function() {
    if (sidesNotValid(sides)) {
      throw 'Sides must be positive values';
    }

    if (triangleInequality(sides)) {
      throw 'Invalid sides; see Triangle Inequality';
    }

    if (side1 === side2 && side2 === side3) {
      return 'equilateral';
    } else if (side1 === side2 || side1 == side3 || side2 == side3){
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}


module.exports = Triangle;
