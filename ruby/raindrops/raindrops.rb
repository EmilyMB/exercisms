module Raindrops

  RAIN_SOUNDS = {
    3 => "Pling",
    5 => "Plang",
    7 => "Plong"
  }

  def self.convert(input_value)
    statement = build_rain_sound_statement(input_value)
    statement == "" ? input_value.to_s : statement
  end

  private

  def self.build_rain_sound_statement(input_value)
    RAIN_SOUNDS.reduce("") do |statement, (divisor, word)|
      statement << word if input_value % divisor == 0
      # statement
    end
  end
end
