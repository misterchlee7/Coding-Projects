def type_function(x):
    if isinstance(x, str):
        if len(x) >= 50:
            print "Long sentence"
        if len(x) < 50:
            print "Short sentence"
    elif isinstance(x, int):
        if x >= 100:
            print "That's a big number!"
        if x < 100:
            print "That's a small number"
    elif isinstance(x, list):
        if len(x) >= 10:
            print "Big list!"
        if len(x) < 10:
            print "Short list"