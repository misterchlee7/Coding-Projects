def coin_tosses():
    import random

    print "Starting the program..."
    head_count = 0
    tail_count = 0

    for i in range(1, 5001):
        heads_or_tails = round(random.random())

        if heads_or_tails == 1:
            head_count += 1
            print "Attempt #" + str(i) + ": Throwing a coin... It's a head! ... Got " + str(head_count) + " head(s) so far and " + str(tail_count) + " tail(s) so far"
        elif heads_or_tails == 0:
            tail_count += 1
            print "Attempt #" + str(i) + ": Throwing a coin... It's a tail! ... Got " + str(head_count) + " head(s) so far and " + str(tail_count) + " tail(s) so far"