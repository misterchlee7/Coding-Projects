require_relative 'human'

class Orc < Human
    def display
        puts "Orc health is #{@health}"
    end
end

human1 = Human.new
orc1 = Orc.new

human1.attack(orc1)
orc1.display
