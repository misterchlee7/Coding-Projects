def scores_grades():
    import random

    for i in range(0, 10):
        random_score = random.randint(60,100)
        if random_score < 70:
            print "Score: " + str(random_score) + "; Your grade is D"
        elif random_score > 69 and random_score < 80:
            print "Score: " + str(random_score) + "; Your grade is C"
        elif random_score > 79 and random_score < 90:
            print "Score: " + str(random_score) + "; Your grade is B"
        elif random_score > 89 and random_score < 101:
            print "Score: " + str(random_score) + "; Your grade is A"
