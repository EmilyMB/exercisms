class PigLatin
  VOWELS = ["a", "e", "i", "o", "u"]

  def self.translate(input)
    input.split.map { |word| self.translate_each(word) }.join(" ")
  end

  def self.translate_each(input)
    @input = input
    move_consonants_to_end(@input)
    add_ay_postfix(@input)
  end

  private

    def self.add_ay_postfix(input)
      "#{input}ay"
    end

    def self.move_consonants_to_end(input)
      return if first_letter_is_a_vowel || first_letter_is_vowellike
      if starts_with_qu
        @input = "#{input[2..-1]}qu"
      elsif starts_with_Xqu
        @input = "#{input[3..-1]}#{input[0..2]}"
      else
        @input = "#{input[first_vowel_position..-1]}#{input[0..first_vowel_position - 1]}"
      end
    end

    def self.first_letter_is_a_vowel
      VOWELS.include?(@input[0])
    end

    def self.first_letter_is_vowellike
      starts_with_x_or_y && second_letter_is_a_consonant
    end

    def self.first_vowel_position
      @input.index(/[aeiou]/)
    end

    def self.starts_with_qu
      @input[0..1] == "qu"
    end

    def self.starts_with_Xqu
      @input[1..2] == "qu"
    end

    def self.starts_with_x_or_y
      @input[0] == "x" || @input[0] == "y"
    end

    def self.second_letter_is_a_consonant
      !VOWELS.include?(@input[1])
    end
end
