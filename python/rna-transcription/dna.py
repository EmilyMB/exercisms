def to_rna(dna_strand):
    dna_to_rna = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}
    rna_strand = ""
    for nucleotide in dna_strand:
        rna_strand += dna_to_rna[nucleotide]
    return rna_strand
