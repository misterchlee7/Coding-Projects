class Bike(object):
    def __init__(self, price, max_speed, miles):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def displayInfo(self):
        print self.price, self.max_speed, self.miles
        return self
    def ride(self):
        print "Riding"
        self.miles += 10
        return self
    def reverse(self):
        print "Reversing"
        if self.miles != 0:
            self.miles -= 5
        return self

ride1 = Bike(0, 0, 0)
ride2 = Bike(0, 0, 0)
ride3 = Bike(0, 0, 0)

ride1.ride().ride().ride().reverse().displayInfo()
ride2.ride().ride().reverse().reverse().displayInfo()
ride3.reverse().reverse().reverse().displayInfo()