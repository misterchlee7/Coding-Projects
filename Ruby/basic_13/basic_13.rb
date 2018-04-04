# # print 1-255
# def print255
#     (1..255).each { |n| puts n }
# end

# print255


# # Print odd numbers between 1-255
# def print255odd
#     puts (1..255).select(&:odd?)
# end

# print255odd


# # Print sum
# def sums255
#     sum = 0
#     (0..255).each do |i|
#         puts "New number: #{i} Sum: #{sum}"
#         sum += i
#     end
# end

# sums255


# # Iterating through an array
# def iterate arr
#     arr.each { |n| puts n }
# end

# arr = [2, 4, 6, "dog", "cat"]
# iterate arr


# # Find max
# def find_max arr
#     puts arr.max
# end

# arr = [-3, -5, -7, 2, 90]
# find_max arr


# # Get average
# def avg arr
#    puts arr.reduce(:+).to_f / arr.length 
# end

# arr = [2, 10, 3]
# avg arr


# # Array with odd numbers
# def arr_odds
#     print (1..255).select(&:odd?)
# end

# arr_odds


# # Greater than Y
# def greater_y(arr, y)
# count = 0
# arr.each do |i|
#     if i > y
#         count += 1
#     end
# end
# puts count
# end

# arr = [1,3,5,7]
# y = 3
# greater_y(arr, y)


# # Square the value
# def square_val arr
#     print arr.map { |item| item * item }
# end

# arr = [1, 5, 10, -2]
# square_val arr


# # Eliminate negative numbers
# def eliminate_neg arr
#     new_arr = []
#     arr.each do |i|
#         if i < 0
#             new_arr.push(0)
#         else
#             new_arr.push(i)
#         end
#     end
#     print new_arr
# end

# arr = [1,5,10,-2]
# eliminate_neg arr


# # Max, min, avg
# def maxminavg arr
#     hash = {}
#     hash[:max] = arr.max
#     hash[:min] = arr.min
#     hash[:avg] = arr.reduce(:+).to_f / arr.length
#     puts hash
# end

# arr = [1,5,10,-2]
# maxminavg arr


# # Shifting the values in the array
# def shift arr
#     new_arr = []
#     arr.each_with_index do |val, idx|
#         if arr[idx + 1] == nil
#             new_arr.push(0)
#         else
#             new_arr.push(arr[idx + 1])
#         end
#     end
#     print new_arr
# end

# arr = [1,5,10,7,-2]
# shift arr


# # Number to string
# def num2string arr
#     new_arr = []
#     arr.each do |i|
#         if i < 0
#             new_arr.push("Dojo")
#         else
#             new_arr.push(i)
#         end
#     end
#     print new_arr
# end

# arr = [-1,-3,2]
# num2string arr