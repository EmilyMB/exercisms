//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  if (/[A-Z]/.test(input) && input === input.toUpperCase())
    return ('Whoa, chill out!')
  else if (input.split('').pop() === '?')
    return ('Sure.')
  else if (input.trim().length === 0)
    return ('Fine. Be that way!')
  else
    return ('Whatever.')
};

module.exports = Bob;
