def foobar():
    prime_check = 0

    for i in range(100, 100001):
        if (i**(1.0/2)) % 1 == 0:
            print "Bar", i
        else:
            for x in range(2, i//2):
                if i % x == 0:
                    prime_check += 1
                else:
                    continue
            if prime_check > 0:
                print "FooBar", i
                prime_check = 0
            else:
                print "Foo", i
                prime_check = 0