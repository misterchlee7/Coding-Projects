class Human
    attr_accessor :strength, :intelligence, :stealth, :health
    def initialize
        @strength = 3
        @intelligence = 3
        @stealth = 3
        @health = 100
    end

    def attack(target)
        if target.class.ancestors.include?(Human)
            target.decrease
            self
        else
            puts "Cannot attack target that's not human class"
            self
        end
    end

    def decrease
        @health -= 10
        self
    end
    
    def display
        puts "Human health is #{@health}"
    end
end