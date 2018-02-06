def compare_lists(list_one, list_two):

    if len(list_one) > len(list_two) or len(list_one) < len(list_two):
        print "Lists are not the same"
    elif len(list_one) == len(list_two):

        not_identical = 0

        for index in range(0, len(list_one)):
            if list_one[index] != list_two[index]:
                not_identical += 1
            elif list_one[index] == list_two[index]:
                continue

        if not_identical != 0:
            print "Lists are not the same"
        elif not_identical == 0:
            print "Lists are the same"