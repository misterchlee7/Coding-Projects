class Underscore(object):
    def map(self, list, fxn):
        for i in range(0, len(list)):
            list[i] = fxn(list[i])
        print list

    # def reduce(self):

    # def find(self):

    # def filter(self):

    # def reject(self):


_ = Underscore()
_.map([1,2,3], lambda x : x * 2)

# let's create an instance of our class
# evens = _.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)
# should return [2, 4, 6] after you finish implementing the code above
