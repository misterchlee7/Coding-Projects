class MathDojo

    def initialize
        @result = 0
    end
    
    def result
        @result
        puts @result
    end

    def add *params
        params.flatten.each{|num|
            @result += num
        }
        self
    end

    def subtract *params
        params.flatten.each{|num|
            @result -= num
        }
        self
    end

end
# challenge1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).result # => 4
challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result # => 23.15

# math1 = MathDojo.new(1,3,5).add(1,3,5).subtract(-10).result