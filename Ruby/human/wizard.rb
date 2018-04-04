require_relative 'human'

class Wizard < Human
    def initialize
        super
        @health = 50
        @intelligence = 25
    end

    def heal
        @health += 10
        self
    end

    def fireball(target)
        if target.class.ancestors.include?(Human)
            target.health -= 20
            self
        else
            puts "Target is invalid for fireball"
            self
        end
    end

    def display
        puts "Wiz health is #{@health}"
    end
end

human1 = Human.new
wizard1 = Wizard.new
wizard1.fireball(human1)
human1.display
  