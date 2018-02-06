def type_list(list):

    sum = 0
    string = ""
    string_check = 0

    for item in list:
        if isinstance(item, int):
            sum += item
        elif isinstance(item, float):
            sum += item
        elif isinstance(item, str):
            string += item + " "
            string_check += 1

    if sum != 0 and string_check != 0:
        print "The list you entered is of mixed type"
        print "String: " + string
        print "Sum: " + str(sum)
    elif sum != 0 and string_check == 0:
        print "The list you entered is of integer type"
        print "Sum: " + str(sum)
    elif sum == 0 and string_check != 0:
        print "The list you entered is of string type"
        print "String: " + string
