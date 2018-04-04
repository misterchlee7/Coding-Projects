def guess_number guess_number
    number = 25
    if guess_number == number
        puts "You got it!"
    elsif guess_number > number
        puts "Guess is too high!"
    elsif guess_number < number
        puts "Guess is too low!"
    end
end

guess_number 24