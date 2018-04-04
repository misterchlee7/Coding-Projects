require_relative 'human'

class Ninja < Human
    def initialize
        super
        @stealth = 175
    end

    def steal
        if target.class.ancestors.include?(Human)
            target.health -= 5
            @health += 10
            self
        else
            puts "Target is invalid for steal"
            self
        end
    end

    def get_away
        @health -= 15
        self
    end
end