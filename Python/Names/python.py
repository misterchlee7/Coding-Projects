# Part 1

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def names_list(dic):
    for i in range(0, len(dic)):
        print dic[i]["first_name"] + " " + dic[i]["last_name"]


# Part 2

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def list_names(dic):
    for key in dic.keys():
        print key
        for i in range(0, len(dic[key])):
            print "{} - {} {} - {}".format(i+1, dic[key][i]["first_name"], dic[key][i]["last_name"], len(dic[key][i]["first_name"]) + len(dic[key][i]["last_name"]))
