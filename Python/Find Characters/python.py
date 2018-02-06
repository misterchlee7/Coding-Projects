def find_chars(word_list, char):

    new_list = []
    for word in word_list:
        if word.find(char) > 0:
            new_list.append(word)
    print new_list

