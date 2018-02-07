class Store(object):
    def __init__(self, products, location, owner):
        self.products = products
        self.location = location
        self.owner = owner
    
    def add_product(self, adding):
        self.products.append(adding)
        return self

    def remove_product(self, removing):
        self.products.remove(removing)
        return self

    def inventory(self):
        print "Products: {}".format(self.products)
        print "Location: {}".format(self.location)
        print "Owner: {}".format(self.owner)
