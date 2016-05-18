class PigLatin
  def self.translate(input)
    @input = input
    move_consonants_to_end(@input)
    add_ay_postfix(@input)
  end

  private

    def self.add_ay_postfix(input)
      "#{input}ay"
    end

    def self.move_consonants_to_end(input)
      return if first_letter_is_a_vowel
      if starts_with_qu
        @input = "#{input[2..-1]}qu"
      elsif starts_with_Xqu
        @input = "#{input[3..-1]}#{input[0..2]}"
      else
        @input = "#{input[first_vowel_position..-1]}#{input[0..first_vowel_position - 1]}"
      end
    end

    def self.first_letter_is_a_vowel
      ["a", "e", "i", "o", "u"].include?(@input[0])
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
end
