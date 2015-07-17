class Binary
  attr_reader :input

  def initialize(input)
    if not_binary(input)
      @input = ['0']
    else
      @input = input.chars
    end
  end

  def to_decimal
    input.reverse.each_with_index.inject(0) do |sum, (value, i)|
      sum + value.to_i * (2 ** i)
    end
  end

  def not_binary(input)
    /[^01]/.match(input)
  end
end
