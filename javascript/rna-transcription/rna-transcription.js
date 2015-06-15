var DNA_TO_RNA = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'};

var toRna = function(strand) {
  var rna = '';
  strand.split('').forEach(function(nucleotide) {
    rna += DNA_TO_RNA[nucleotide];
  });
  return rna;
}


module.exports = toRna;
