class Binary
  attr_reader :input

  def initialize(binary)
    @input = only_zeros_and_ones(binary)
  end

  def to_decimal
    input.each_with_index.inject(0) do |sum, (value, i)|
      sum + value.to_i * (2 ** (input.length - i - 1))
    end
  end

  def only_zeros_and_ones(binary)
    if binary.delete("01") == ""
      binary.split("")
    else
      ["0"]
    end
  end
end
