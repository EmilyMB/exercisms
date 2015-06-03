class Sieve
  attr_reader :range

  def initialize(limit)
    @range = Array(2..limit)
  end

  def primes
    range.each do |x|
      delete_multiples(x)
    end
    range
  end

  def delete_multiples(x)
    2.upto(range.max / x) do |i|
      range.delete(i * x)
      i += 1
    end
  end
end
