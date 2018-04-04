# # # Problem 1
# def sums_and_greater10 arr
#     sum = arr.reduce(:+)
#     puts "Sum is #{sum}"
#     new_arr = arr.find_all { |i| i > 10 }
#     puts "New array with values greater than 10 are #{new_arr}"
# end

# arr = [3,5,1,2,7,9,8,13,25,32]
# sums_and_greater10 arr


# # # Problem 2
# def shuffle_and_longer5 arr
#     arr.shuffle.each do |i|
#         puts i
#     end
#     new_arr = arr.find_all { |i| i.length > 5 }
#     puts "New array with names longer than 5 characters are #{new_arr}"
# end

# arr = ["John", "KB", "Oliver", "Cory", "Matthew", "Christopher"]
# shuffle_and_longer5 arr


# # # Problem 3
# def alphabet arr
#     new_arr = arr.shuffle
#     vowels = ["a", "e", "i", "o", "u"]
#     last = new_arr.last
#     puts "Last letter of the new shuffle is #{last}"
#     first = new_arr.first
#     puts "First letter of the new shuffle is #{first}"
#     if vowels.include?(new_arr.first)
#         puts "First letter is a vowel!"
#     end
# end

# arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
# "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
# alphabet arr


# # # Problem 4
# def rand
#     rand_nums = 10.times.map{ 55 + Random.rand(46) }
#     print rand_nums
# end

# rand


# # # Problem 5
# def rando2
#     rand_nums = 10.times.map{ 55 + Random.rand(46) }.sort
#     puts "Random 10 numbers from 55 to 100 are #{rand_nums}"
#     min = rand_nums.min
#     max = rand_nums.max
#     puts "Max from the array is #{max} and min is #{min}"
# end

# rando2


# # # Problem 6
# def rand_str
#     random_str = (0..4).map { (65 + rand(26)).chr }.join
#     puts "Random string is: #{random_str}"
# end

# rand_str


# # # Problem 7
# def rand_strs_in_arr
#     arr = 10.times.map{ (0..4).map { (65 + rand(26)).chr }.join }
#     puts "An array with 10 random strings that are each 5 chars long are: #{arr}"
# end

# rand_strs_in_arr