require "spec_helper"

RSpec.describe Stringer do
  it "concatenates undefined number of strings with a space" do 
    expect(Stringer.spacify "Oscar", "Vazquez", "Zweig", "Olasaba", "Hernandez", "Ricardo", "Mendoza").to eq("Oscar Vazquez Zweig Olasaba Hernandez Ricardo Mendoza")
  end

  it "minifies the string input to the value's length" do
    expect(Stringer.minify "Hello, I'm learning how to create a gem", 10)
  end

  it "replaces instances of a value in given string with replacement values" do
    expect(Stringer.replacify "I can't do this", "can't", "can")
  end

  it "add words to an array and returns array" do
    expect(Stringer.tokenize "I love to code")
  end

  it "removes value word from sentence" do
    expect(Stringer.removify "I'm not a developer", "not")
  end

end
