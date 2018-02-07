class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        if self.price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        def display_all():
            print "Price: {}".format(self.price)
            print "Speed: {}".format(self.speed)
            print "Fuel: {}".format(self.fuel)
            print "Mileage: {}".format(self.mileage)
            print "Tax: {}".format(self.tax)
        display_all()

instance1 = Car(2000, "35mph", "Full", "15mpg")
instance2 = Car(2000, "5mph", "Not Full", "105mpg")
instance3 = Car(2000, "15mph", "Kind of Full", "95mpg")
instance4 = Car(2000, "25mph", "Full", "25mpg")
instance5 = Car(2000, "45mph", "Empty", "25mpg")
instance6 = Car(20000000, "35mph", "Empty", "15mpg")

instance1
instance2
instance3
instance4
instance5
instance6
