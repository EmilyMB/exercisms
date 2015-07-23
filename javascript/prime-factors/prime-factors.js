var primeFactors = function() {};

primeFactors.prototype.for = function(input) {
  var primes = calculatePrimes(input + 1);
  return findFactors(input, [], 0, primes);
}

function findFactors(input, factors, index, primes) {
  var factors = factors;
  var currentPrime = primes[index];

  if(input > 1) {
    if(input % currentPrime === 0) {
      factors.push(currentPrime);
      input = input/currentPrime;
    } else {
      index += 1;
    }
    findFactors(input, factors, index, primes);
  }
  return factors;
}

// From Alexander's solution to SO question: http://stackoverflow.com/questions/15471291
var calculatePrimes = function(n) {
  var array = []
  var upperLimit = Math.sqrt(n)
  var output = [];

  for(var i = 0; i < n; i++) {
    array.push(true);
  }
  // Set multiples of primes starting from 2, 3, 5,... to false
  for (var i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (var j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }
  // All array[i] set to true are primes
  for (var i = 2; i < n; i++) {
    if(array[i]) {
      output.push(i);
    }
  }
  return output;
};

module.exports = new primeFactors;
