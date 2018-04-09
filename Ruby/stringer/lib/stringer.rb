require "stringer/version"

module Stringer
  def self.spacify *strings
    string = ""
    strings.each do |s|
        if string == ""
          string += s
        else
          string += " " + s
        end
    end
    string
  end

  def self.minify string, limit
    str = ""
    count = 0
    string.split("").each do |s|
      if count <= limit
        str += s
      elsif count <= limit + 3
        str += "."
      end
      count += 1
    end
    str
  end
  
  def self.replacify sentence, to_repl, repl_w
    sentence.split(" ").each do |word|
      if word == to_repl
        word = repl_w
      end
    end
    sentence
  end

  def self.tokenize sentence
    arr = []
    sentence.split(" ").each do |word|
      arr.push(word)
    end
    arr
  end

  def self.removify sentence, not_word
    str = ""
    sentence.split(" ").each do |word|
      if word != not_word
        str += word
      end
    end
    str
  end

end
