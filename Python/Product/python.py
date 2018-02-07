class Product(object):
    def __init__(self, price, item_name, weight, brand, status="for sale"):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.status = status
    
    def Sell(self):
        self.status = "sold"
        return self

    def Add_Tax(self, tax):
        self.price *= (1 + tax)
        return self

    def Return(self, reason):
        if reason == "defective":
            self.status = "defective"
            self.price = 0
        elif reason == "like new":
            self.status = "for sale"
        elif reason == "opened":
            self.status = "used"
            self.price *= 0.8
        return self
    
    def Display_Info(self):
        print "Price: {}".format(self.price)
        print "Item Name: {}".format(self.item_name)
        print "Weight: {}".format(self.weight)
        print "Brand: {}".format(self.brand)
        print "Status: {}".format(self.status)
        return self


