class AppleTree
    attr_accessor :age
    attr_reader :height, :apple_count
  
    def initialize
      @age = 0
      @height = 7
      @apple_count = 0
    end
  
    def year_gone_by
      @age += 1
  
      if @age > 10
        puts "Too old for apples now..."
      elsif @age < 4
        puts "Tree's too young to produce apples for now..."
      else
        @height *= 1.1
        @apple_count += 2
      end
  
      self
    end
  
    def pick_apples
      puts "All apples were picked!"
      @apple_count = 0
      self
    end
  end
  