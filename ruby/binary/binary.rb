class Binary
  attr_reader :input

  def initialize(binary)
    if only_zeros_and_ones(binary)
      @input = binary.chars
    else
      @input = ['0']
    end
  end

  def to_decimal
    input.reverse.each_with_index.inject(0) do |sum, (value, i)|
      sum + value.to_i * (2 ** i)
    end
  end

  def only_zeros_and_ones(binary)
    binary.delete('01') == ""
  end
end
