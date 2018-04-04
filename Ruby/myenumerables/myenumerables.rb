module MyEnumerable
    def my_each(&block)
        result = []
        self.each do |element|
            result << block.call(element)
        end
        result
    end
  end
  class Array
     include MyEnumerable
  end
  [1,2,3,4].my_each { |i| puts i } # => 1 2 3 4
  [1,2,3,4].my_each { |i| puts i * 10 } # => 10 20 30 40