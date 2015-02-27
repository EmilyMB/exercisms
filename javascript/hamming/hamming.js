var Hamming = [];

Hamming.compute = function(input1, input2) {

  if(input1.length != input2.length) {
    throw new Error('DNA strands must be of equal length.');
  } else {
    diff_count = 0;
    for(var i = 0; i < input1.length; i++) {
      if(input1[i] != input2[i]) diff_count += 1;
    }
    return(diff_count);
  }
}

module.exports = Hamming;
