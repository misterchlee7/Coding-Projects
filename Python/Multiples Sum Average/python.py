# Multiples Part I

# the function multiples when called will run a for loop that inclusively begins with 1 and exclusively ends with 1000. This loop will skip by 2 and print each value skipped by 2 starting 1 thus printing only odd numbers.

def multiples():
    for x in range(1, 1000, 2):
        print x


# Multiples Part II

#this function runs a while loop as long as the result is under 1,000,001. The count variable being multiples to the counter variable i ensures each number of i is multiplied by 5 thus updating the product result which is x.

def multiples_five():
    count = 5
    i = 1
    x = 5
    while x < 1000001:
        print x
        x = i * count
        i += 1


# Sum List

def sum_list():
    a = [1, 2, 5, 10, 255, 3]
    
    sum = 0
    for x in a:
        sum += x
    print sum


# Average List

def avg_list():
    a = [1, 2, 5, 10, 255, 3]
    
    sum = 0
    for x in a:
        sum += x
    avg = sum / len(a)
    print avg