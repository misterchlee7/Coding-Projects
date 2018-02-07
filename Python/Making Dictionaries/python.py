name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas", "turkey"]

def make_dict(list1, list2):
    if len(list2) > len(list1):
        temp = list1
        list1 = list2
        list2 = temp
    zipped = zip(list1,list2)
    new_dict = dict(zipped)
    print new_dict