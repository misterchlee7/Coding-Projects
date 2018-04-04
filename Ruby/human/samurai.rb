require_relative 'human'

class Samurai < Human
    
    @@num_of_samurai = 0
    def initialize
        super
        @health = 200
        @@num_of_samurai += 1
    end

    def death_blow(target)
        if target.class.ancestors.include?(Human)
            target.health -= target.health
            self
        else
            puts "Target is invalid for death blow"
            self
        end
    end

    def medidate
        @health = 200
        self
    end

    def how_many
        puts @@num_of_samurai
    end

    def display
        puts "Health #{@health}, Stealth #{@stealth}"
    end
end

samu1 = Samurai.new
samu1.display