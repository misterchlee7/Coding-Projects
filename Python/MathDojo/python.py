class MathDojo(object):
    def __init__(self, num=0):
        self.num = num
    
    def add(self, *nums):
        for x in nums:
            if isinstance(x, int):
                self.num = self.num + x
            if isinstance(x, float):
                self.num = self.num + x
            if isinstance(x, list):
                for y in x:
                    self.num = self.num + y
            if isinstance(x, tuple):
                for y in x:
                    self.num = self.num + y
        return self

    def subtract(self, *nums):
        for x in nums:
            if isinstance(x, int):
                self.num = self.num - x
            if isinstance(x, float):
                self.num = self.num - x
            if isinstance(x, list):
                for y in x:
                    self.num = self.num - y
            if isinstance(x, tuple):
                for y in x:
                    self.num = self.num - y
        return self
    
    def result(self):
        print self.num