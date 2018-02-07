Charlie = {
    "name" : "Charlie",
    "age" : 32,
    "country of birth" : "South Korea",
    "favorite language" : "English"
}

def me_dict(dic):
    for key, value in dic.items():
        if key == "age":
            print "My " + key + " is " + str(value)
        elif key == "favorite language":
            print "My " + key + " is " + value
        elif key == "name":
            print "My " + key + " is " + value
        elif key == "country of birth":
            print "My " + key + " is " + value
