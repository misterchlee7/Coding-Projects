# Odd / Even

def odd_even():
    for i in range(1,2001):
        if i % 2 != 0:
            print "Number is " + str(i) + ". This is an odd number."
        elif i % 2 == 0:
            print "Number is " + str(i) + ". This is an even number."


# Multiply

def multiply(list, x):
    for i in range(0, len(list)):
        list[i] *= x
    return list


# Hacker Challenge

def layered_multiples(arr):
    new_big_list = []

    for idx in range(0, len(arr)):
        new_list = []
        num_val = arr[idx]
        for rep in range(0, num_val):
            new_list.append(str(1))
        new_big_list.append(new_list)
    print new_big_list