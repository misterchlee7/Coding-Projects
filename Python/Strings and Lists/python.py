# Find and replace

words = "It's thanksgiving day. It's my birthday,too!"
words.find("day")

new_str = words.replace("day","month")

# Min and Max

x = [2,54,-2,7,12,98]
min = min(x)
max = max(x)
min_max = min, max

# First and Last

x = ["hello",2,54,-2,7,12,98,"world"]
first = x[0]
last = x.pop()
first_last = first, last

# New List

x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
a = x[:len(x)/2]
b = x[len(x)/2 : len(x)]
new_list = b.insert(0,a)